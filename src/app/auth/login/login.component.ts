import {Component} from '@angular/core';
import {AuthService} from "../auth.service";

export interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  model: Partial<User> = {};
  constructor(protected auth: AuthService) {
  }

  login(){
    this.auth.login(this.model as User);
  }

}
