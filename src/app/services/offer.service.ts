import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Offer} from "../pages/offer/offer.component";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private url = 'http://localhost:8080'
  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getOffers(){
    return this.http.get<Offer[]>(this.url + '/offers', {headers: {
      "Authorization":"Bearer " + this.auth.getToken()
      } }).pipe(tap(console.log));
}
}
