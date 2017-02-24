import {Injectable} from '@angular/core';
import {LoginBox} from "../login-modal/login-modal.component";
import {Http, Headers, Request, RequestMethod, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginRegisterService {
  static profile: Profile;
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  });


  constructor(private http: Http) {
  }

  //noinspection JSAnnotator
  public async sendVcode(mobile: string): Promise<Object> {
    var promise = new Promise<string>((resolve, reject) => {
      let request = new Request(new RequestOptions({
        method: RequestMethod.Post,
        url: 'http://localhost:3000/passport/sendVcode/' + mobile
      }));
      this.http.request(request).subscribe(res => resolve(JSON.stringify(res)),err=>reject(err));
    });
    return promise;
  }

  doLogin(loginBox: LoginBox) {
    LoginRegisterService.profile = new Profile();
    LoginRegisterService.profile.username = loginBox.username;
    LoginRegisterService.profile.headIco = 'assets/img/head.jpg'
  }

  doLogout() {
    LoginRegisterService.profile = null;
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}


export class Profile {
  username: String;
  gender: String;
  headIco: String;
}
