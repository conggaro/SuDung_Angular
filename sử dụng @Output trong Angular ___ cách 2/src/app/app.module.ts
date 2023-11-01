import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhanTuConComponent } from './phan-tu-con/phan-tu-con.component';
import { SuDungOutputComponent } from './su-dung-output/su-dung-output.component';

@NgModule({
  declarations: [
    AppComponent,
    PhanTuConComponent,
    SuDungOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
