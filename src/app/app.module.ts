import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FloatingMenuComponent } from './floating-menu/floating-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollmenuComponent } from './scrollmenu/scrollmenu.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { CarouselInternalComponent } from './carousel-internal/carousel-internal.component';
import { Card1Component } from './card1/card1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    FloatingMenuComponent,
    FooterComponent,
    ScrollmenuComponent,
    ProductgridComponent,
    CarouselInternalComponent,
    Card1Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
