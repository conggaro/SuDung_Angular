import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhanTuAComponent } from './phan-tu-a/phan-tu-a.component';
import { PhanTuBComponent } from './phan-tu-b/phan-tu-b.component';

@NgModule({
  declarations: [
    AppComponent,
    PhanTuAComponent,
    PhanTuBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }