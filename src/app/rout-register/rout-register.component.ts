import {Component, OnInit} from '@angular/core';
import {LoginRegisterService} from "../service/login-register.service";

@Component({
  selector: 'app-rout-register',
  templateUrl: './rout-register.component.html',
  styleUrls: ['./rout-register.component.css']
})
export class RoutRegisterComponent implements OnInit {

  registerEntity: RegisterEntity;
  time: number = 0;

  constructor(private loginRegisterService: LoginRegisterService) {

  }

  ngOnInit() {
    this.registerEntity = new RegisterEntity();
  }

  submit() {
    if (this.registerEntity.validateAll()) {
    }
  }


  async sendVcode() {
    if (this.registerEntity.mobileErr == null) {
      try {
        let msg = await this.loginRegisterService.sendVcode(this.registerEntity.mobile);
        this.time = 60;
        let d = setInterval(() => {
          this.time--;
          if (this.time == 0) {
            clearInterval(d);
          }
        }, 1000)
      } catch (e) {
        this.registerEntity.mobileErr = e.statusText;
      }
    }
  }

}


class RegisterEntity {
  mobile: string = '';
  mobileErr: string = '';
  vcode: string = '';
  vcodeErr: string = '';
  nick: string = '';
  nickErr: string = '';
  pass: string = '';
  passErr: string = '';
  passC: string = '';
  passCErr: string = '';

  validateMobile() {
    if (/^1[34578]\d{9}$/.test(this.mobile)) {
      this.mobileErr = null
    } else {
      this.mobileErr = 'n'
    }
  }


  validateVcode() {
    if (this.vcode.length == 6) {
      this.vcodeErr = null
    } else {
      this.vcodeErr = 'n'
    }
  }


  validatePass() {
    this.validatePassC()
    if (this.pass.length > 6) {
      this.passErr = null;
    } else {
      this.passErr = 'n';
    }
  }

  validatePassC() {

    if (this.pass == this.passC) {
      this.passCErr = null;
    } else {
      this.passCErr = 'n'
    }
  }

  validateAll() {
    this.validateMobile();
    this.validateVcode();
    this.validatePass();
    this.validatePassC()
    if (this.pass.length <= 6) {
      this.passErr = '密码过短'
      return false;
    }

    if (this.pass != this.passC) {
      this.passCErr = '两次密码不相同'
      return false;
    }
    return true;
  }

  getErrorMsg(step) {
    let msg = '';
    if (this.mobileErr != null && this.mobileErr.length > 1) {
      msg = this.mobileErr
      return msg;
    }
    if (this.vcodeErr != null && this.vcodeErr.length > 1) {
      msg = this.vcodeErr
      return msg;
    }
    if (this.passErr != null && this.passErr.length > 1) {
      msg = this.passErr
      return msg;
    }
    if (this.passCErr != null && this.passCErr.length > 1) {
      msg = this.passCErr
      return msg;
    }
  };
}
