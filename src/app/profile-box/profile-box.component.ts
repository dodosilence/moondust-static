import {Component, OnInit} from '@angular/core';
import {LoginModalComponent} from "../login-modal/login-modal.component";
import {LoginRegisterService} from "../service/login-register.service";

@Component({
  selector: 'app-profile-box',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.css']
})
export class ProfileBoxComponent implements OnInit {

  profileItemsHide:boolean=true;

  constructor(private loginRegisterService: LoginRegisterService) {
  }
  ngOnInit() {
  }
  getProfile() {
    return LoginRegisterService.profile;
  }

  showLoginModal() {
    LoginModalComponent.show = true;
  }


  logout() {
    this.loginRegisterService.doLogout()
  }

}
