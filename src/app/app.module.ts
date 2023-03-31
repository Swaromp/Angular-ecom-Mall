import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FloatingMenuComponent } from './home/floating-menu/floating-menu.component';
import { FooterComponent } from './home/footer/footer.component';
import { ScrollmenuComponent } from './home/scrollmenu/scrollmenu.component';
import { ProductgridComponent } from './home/productgrid/productgrid.component';
import { CarouselInternalComponent } from './home/carousel-internal/carousel-internal.component';
import { Card1Component } from './home/card1/card1.component';
import { SMenuComponent } from './smenu/smenu.component';
import { FAQComponent } from './faq/faq.component';
import { InfoComponent } from './info/info.component';
import { VmenuComponent } from './vmenu/vmenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricefilterPipe } from './pipes/pricefilter.pipe';
import { Vivo1Component } from './vivo1/vivo1.component';

import { SortByPropertyPipe } from './pipes/sortby.pipe';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatBadgeModule } from '@angular/material/badge'


import { ComparemobileComponent } from './home/comparemobile/comparemobile.component';
import { ComparedataService } from './services/comparedata.service';
import { FilterPipe } from './home/filter.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { OfferPipe } from './pipes/offer.pipe';
import { DownPipe } from './pipes/down.pipe';
import { EmifilterPipe } from './pipes/emifilter.pipe';
import { DelPipe } from './pipes/del.pipe';
import { KartComponent } from './kart/kart.component';
import { AddToKartComponent } from './add-to-kart/add-to-kart.component';
import { TotalAmountPipe } from './pipes/total-amount.pipe';
import {HttpClientModule} from '@angular/common/http'
import { NgOtpInputModule } from  'ng-otp-input';


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
    Vivo1Component,
    SortByPropertyPipe,
    KartComponent,
    AddToKartComponent,
    TotalAmountPipe,
    WishlistComponent,
    ComparemobileComponent,
    FilterPipe,
    ShortenPipe,
    OfferPipe,
    DownPipe,
    EmifilterPipe,
    DelPipe,
    KartComponent,
    AddToKartComponent,
    TotalAmountPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgOtpInputModule,
  ],
  providers: [ComparedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
