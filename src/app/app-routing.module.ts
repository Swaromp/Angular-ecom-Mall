import { SMenuComponent } from './smenu/smenu.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vivo1Component } from './vivo1/vivo1.component';
import { KartComponent } from './kart/kart.component';
import { AddToKartComponent } from './add-to-kart/add-to-kart.component';

import { DeliveryStatusComponent } from './delivery-status/delivery-status.component';

import { WishlistComponent } from './wishlist/wishlist.component';
import { ComparemobileComponent } from './home/comparemobile/comparemobile.component';
import { LoanCalculatorComponent } from './home/loan-calculator/loan-calculator.component';

const routes: Routes = [
  { path: '', component: CarouselComponent},
  { path:'smenu/:id', component: SMenuComponent},
  { path:'vivo1/:id1', component: Vivo1Component},
  { path:'Loan-Eligibility-calculator', component: LoanCalculatorComponent},
  { path: 'kart', component:KartComponent},
  { path: 'add-to-kart', component:AddToKartComponent},

  { path: 'delivery-status', component:DeliveryStatusComponent}

  { path:'wishlist', component: WishlistComponent},
  {path: 'compare/:id2', component: ComparemobileComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
