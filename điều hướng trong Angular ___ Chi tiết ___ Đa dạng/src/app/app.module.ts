import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhanTu1Component } from './phan-tu1/phan-tu1.component';
import { PhanTu2Component } from './phan-tu2/phan-tu2.component';
import { OverlayComponent } from './overlay/overlay.component';
import { CustomizeFormModule } from './customize-form/customize-form.module';
import { PhanTu3Module } from './phan-tu3/phan-tu3.module';

@NgModule({
  declarations: [
    AppComponent,
    PhanTu1Component,
    PhanTu2Component,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomizeFormModule,
    PhanTu3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }