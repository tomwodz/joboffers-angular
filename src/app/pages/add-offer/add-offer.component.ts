import {Component, OnInit} from '@angular/core';
import {OfferRequestDto} from "../models/offerrequestdto";
import {OfferService} from "../../services/offer.service";
import {Offer} from "../models/offer";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit{

  model: Partial<OfferRequestDto> = {};
  offer: Partial<Offer>;
  message: string;

  constructor(private service: OfferService) {
  }
  postOfferRequestDto (){
    this.service.postOfferRequestDto(this.model as OfferRequestDto).subscribe(
      offer => {this.message = 'Doddano: ' + offer.offerUrl},
      error => {this.message = error.message}
    );
  }

  ngOnInit(): void {
  this.message = '';
  }



}
