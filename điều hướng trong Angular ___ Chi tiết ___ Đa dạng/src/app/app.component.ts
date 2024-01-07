import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {

  }

  onClickHome(): void {
    this.router.navigate([""]);
  }

  onClickLink1(): void {
    this.router.navigate(["phan-tu1"]);
  }

  onClickLink2(): void {
    this.router.navigate(["phan-tu2"]);
  }

  onClickLink3(): void {
    // nó điều hướng được đến "phan-tu3"
    // vì tôi đã khai báo PhanTu3Module
    // vào trong AppModule

    this.router.navigate(["phan-tu3"]);
  }

  onClickTurnOnOverlay(): void {
    this.router.navigate(["app-overlay"]);
  }
}
