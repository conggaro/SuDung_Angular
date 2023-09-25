import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    User1Component,
    User2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
