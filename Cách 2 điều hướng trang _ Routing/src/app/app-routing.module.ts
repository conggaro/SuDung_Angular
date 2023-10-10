import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhanTu1Component } from './phan-tu1/phan-tu1.component';
import { PhanTu2Component } from './phan-tu2/phan-tu2.component';

const routes: Routes = [
  {
    path: "phan-tu1",
    component: PhanTu1Component
  },
  {
    path: "phan-tu2",
    component: PhanTu2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
