import { SMenuComponent } from './smenu/smenu.component';
// import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vivo1Component } from './vivo1/vivo1.component';

const routes: Routes = [
  { path: '', component: CarouselComponent},
  {path:'smenu', component: SMenuComponent},
  { path: 'vivo1', component: Vivo1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
