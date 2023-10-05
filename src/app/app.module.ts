import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import {HttpClientModule} from "@angular/common/http";
import {OfferComponent} from "./pages/offer/offer.component";
import {AppRoutingModule} from "./app-routing.module";
import {InformationComponent} from "./pages/information/information.component";
import {LoginComponent} from "./auth/login/login.component";
import { AddOfferComponent } from './pages/add-offer/add-offer.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    InformationComponent,
    AddOfferComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AddOfferComponent
  ]
})
export class AppModule { }
