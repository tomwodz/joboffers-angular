import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {catchError, empty, Observable} from "rxjs";
import {OfferRequestDto} from "../pages/models/offerrequestdto";
import {Offer} from "../pages/models/offer";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private url = 'http://www.devjava.pl:9000'
  constructor(private http: HttpClient, private auth: AuthService) {
  }

  getOffers(){
    return this.http.get<Offer[]>(this.url + '/offers', {headers: {
      "Authorization":"Bearer " + this.auth.getToken()
      } }).pipe(
        catchError((err) => {
          if(err instanceof  HttpErrorResponse){
            console.log('Sesja wygasła.')
            this.auth.logout('Sesja wygasła. Zaloguj się ponownie.');
          }
          return empty();
        })
    );
  }

  postOfferRequestDto(request: OfferRequestDto): Observable<Offer> {
    return this.http.post<Offer>(this.url + '/offers', request, {headers: {
        "Authorization":"Bearer " + this.auth.getToken()
      } });
  }
}
