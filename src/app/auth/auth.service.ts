import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {User} from "./login/login.component";

interface Session {
  username: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uri = 'http://www.localhost:8080';
  private session = new BehaviorSubject<Session|null>(null);
  constructor(private http:HttpClient) { }

  getToken(){
    const session = this.session.getValue();
    return session && session.token;
  }

  getCurrentUser(){
    const session = this.session.getValue();
    return session && session.username;
  }

  login(user: User){
    this.http.post<Session>(this.uri + '/token', user).subscribe(
      session => {
        this.session.next(session),
        console.log(session.username),
        console.log(session.token)}
    );
  }

}
