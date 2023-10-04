import { Component } from '@angular/core';
import {LoginComponent} from "./auth/login/login.component";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joboffers-angular';
  constructor(private auth: AuthService) {
  }

  logout(){
    this.auth.logout();
  }
  isLogged(){
    return this.auth.isLogged;
  }
}
