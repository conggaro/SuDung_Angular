import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhanTuConComponent } from './phan-tu-con/phan-tu-con.component';
import { PhanTuMangComponent } from './phan-tu-mang/phan-tu-mang.component';

@NgModule({
  declarations: [
    AppComponent,
    PhanTuConComponent,
    PhanTuMangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
