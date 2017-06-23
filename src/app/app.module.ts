import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AmazeComponent } from './amaze/amaze.component';
import { TableComponent } from './table/table.component';
import { ImgComponent } from './img/img.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadCombComponent } from './bread-comb/bread-comb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AmazeComponent,
    TableComponent,
    ImgComponent,
    BadgeComponent,
    BreadCombComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
