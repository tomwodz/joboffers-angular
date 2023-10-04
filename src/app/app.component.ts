import { Component } from '@angular/core';
import {LoginComponent} from "./auth/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joboffers-angular';
  protected readonly LoginComponent = LoginComponent;
}
