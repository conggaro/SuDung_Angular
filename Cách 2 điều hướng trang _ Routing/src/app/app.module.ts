import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhanTu1Component } from './phan-tu1/phan-tu1.component';
import { PhanTu2Component } from './phan-tu2/phan-tu2.component';

@NgModule({
  declarations: [
    AppComponent,
    PhanTu1Component,
    PhanTu2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
