import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';

// thêm thư viện Form Module
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
