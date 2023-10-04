import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, throwError} from "rxjs";
import {User} from "./login/login.component";
import {Router} from "@angular/router";

interface Session {
  username: string;
  token: string;
}

interface UserResponse {
  id: string;
  username: string;
  registered: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uri = 'http://www.localhost:8080';
  private session = new BehaviorSubject<Session | null>(null);

  isLogged: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  getToken() {
    const session = this.session.getValue();
    return session && session.token;
  }

  getCurrentUser() {
    const session = this.session.getValue();
    return session && session.username;
  }

  login(user: User) {
    this.http.post<Session>(this.uri + '/token', user).subscribe(
      session => {
        this.session.next(session),
          console.log(session.username),
          console.log(session.token),
          this.isLogged = true,
          this.router.navigate(['/offer'])
      },
      error => {if(error instanceof HttpErrorResponse){
            console.log(error.error)};
      }
    );
  }

  logout(){
    this.isLogged = false;
    this.session.next(null);
    this.router.navigate(['/']);
  }

  register(user: User) {
    this.http.post<UserResponse>(this.uri + '/register', user).subscribe(
      user => {
          console.log(user.id, user.username, user.registered),
          this.router.navigate(['/login'])
      },
      error => {if(error instanceof HttpErrorResponse){
        console.log(error.error)};
      }
    );
  }

}
