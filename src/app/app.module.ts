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
import { SMenuComponent } from './smenu/smenu.component';
import { FAQComponent } from './faq/faq.component';
import { InfoComponent } from './info/info.component';
import { VmenuComponent } from './vmenu/vmenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricefilterPipe } from './pipes/pricefilter.pipe';
import { Vivo1Component } from './vivo1/vivo1.component';

@NgModule({
  declarations: [
    AppComponent,

    PricefilterPipe,
    SMenuComponent,
    VmenuComponent,
    FAQComponent,
    InfoComponent,
    NavbarComponent,
    CarouselComponent,
    FloatingMenuComponent,
    FooterComponent,
    ScrollmenuComponent,
    ProductgridComponent,
    CarouselInternalComponent,
    Card1Component,
    Vivo1Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
