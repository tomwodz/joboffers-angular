import {Component, OnInit} from '@angular/core';
import {OfferService} from "../../services/offer.service";
import {Observable} from "rxjs";


export interface Offer {
  id: string;
  companyName: string;
  position: string;
  salary: string;
  offerUrl: string;
}
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit{

  offers: Observable<Offer[]>;
  constructor(private service: OfferService) {
  }

  ngOnInit(): void {
    this.offers = this.service.getOffers();
    console.log(this.offers);
  }



}
