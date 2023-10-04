import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import {InformationComponent} from "./pages/information/information.component";
import {OfferComponent} from "./pages/offer/offer.component";
import {RegisterComponent} from "./auth/register/register.component";


const routes: Routes = [
  { path: '', redirectTo: '/information', pathMatch: 'full' },
  {path: 'information', component: InformationComponent},
  {path: 'offer', component: OfferComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule {}
