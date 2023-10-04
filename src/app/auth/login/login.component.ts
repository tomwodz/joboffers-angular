import {Component, OnInit} from '@angular/core';
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
export class LoginComponent implements OnInit{

  model: Partial<User> = {};
  constructor(private auth: AuthService) {
  }

  login(){
    this.auth.login(this.model as User);
  }

  ngOnInit(): void {
  }


}