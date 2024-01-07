import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhanTu3Component } from './phan-tu3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'phan-tu3',
    component: PhanTu3Component
  }
];

@NgModule({
  declarations: [
    PhanTu3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PhanTu3Module { }