import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VongDoiComponentComponent } from './vong-doi-component/vong-doi-component.component';
import { GioiThieuAngularComponent } from './gioi-thieu-angular/gioi-thieu-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    VongDoiComponentComponent,
    GioiThieuAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
