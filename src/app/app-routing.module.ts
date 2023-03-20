import { SMenuComponent } from './smenu/smenu.component';
// import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vivo1Component } from './vivo1/vivo1.component';
import { KartComponent } from './kart/kart.component';
import { AddToKartComponent } from './add-to-kart/add-to-kart.component';

const routes: Routes = [
  { path: '', component: CarouselComponent},
  { path:'smenu/:id', component: SMenuComponent},
  { path:'vivo1/:id', component: Vivo1Component},
  { path: 'kart', component:KartComponent},
  { path: 'add-to-kart', component:AddToKartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
