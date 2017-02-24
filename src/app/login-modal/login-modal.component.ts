import {Component, OnInit, animate, transition, style, state, trigger} from '@angular/core';
import {Router} from "@angular/router";
import {LoginRegisterService} from "../service/login-register.service";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s ease-out', style({
          opacity: 0,
          transform: 'scale(1)'
        }))
      ])
    ])
  ]
})
export class LoginModalComponent implements OnInit {
  static show: boolean;


  loginBox: LoginBox = new LoginBox();

  constructor(private loginRegiserService: LoginRegisterService, private router: Router) {
  }

  ngOnInit() {
  }

  show() {
    return LoginModalComponent.show;
  }

  hide() {
    LoginModalComponent.show = false;
  }

  validate() {
    if (this.loginBox.username != null && this.loginBox.username.length > 5) {
      this.loginBox.usernameErr = this.loginBox.username
    } else {
      this.loginBox.usernameErr = null;
    }
    if (this.loginBox.password != null && this.loginBox.password.length > 5) {
      this.loginBox.passwordErr = this.loginBox.password
    } else {
      this.loginBox.passwordErr = null;
    }
  }


  submit() {
    this.loginRegiserService.doLogin(this.loginBox);
    this.hide()
  }


  toRegister() {
    this.hide();
    this.router.navigate(['/register.html']);
  }
}


export class LoginBox {
  username: String;
  password: String;
  usernameErr: String;
  passwordErr: String;
}
