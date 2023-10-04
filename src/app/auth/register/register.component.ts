import { Component } from '@angular/core';
import {AuthService} from "../auth.service";

export interface User {
  username: string;
  password: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model: Partial<User> = {};
  constructor(private auth: AuthService) {
  }

  register(){
    this.auth.register(this.model as User);
  }


}
