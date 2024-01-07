import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

interface Account {
  username: string,
  password: string
}

@Component({
  selector: 'app-phan-tu3',
  templateUrl: './phan-tu3.component.html',
  styleUrls: ['./phan-tu3.component.css']
})

export class PhanTu3Component {
  @ViewChild("myOverlay") myOverlay!: ElementRef<HTMLDivElement>;

  myFormModel: Account = {
    username: "",
    password: ""
  };

  showJSON: boolean = true;

  constructor (
    private router: Router
  ) {
    console.log("Thông báo:\nBạn điều hướng được đến 'app-phan-tu3'\nVì đã khai báo PhanTu3Module vào trong AppModule");
  }

  onClickOverlay(): void {
    this.myOverlay.nativeElement.style.display = "none";
    
    this.router.navigate([""]);
  }

  enterTextByUser(): void {
    console.log(`Nhập tên đăng nhập:\n${this.myFormModel.username}`);
  }

  enterPasswordByUser(): void {
    console.log(`Nhập mật khẩu:\n${this.myFormModel.password}`);
  }

  onClickSubmitForm(event: Event): void {
    console.log("In ra myFormModel:\n", this.myFormModel);
    console.log("\nIn ra đối tượng sự kiện $event:\n", event);
  }

  onClickRadioTurnOn(): void {
    this.showJSON = true;

    console.log("Hiển thị myFormModel");
  }

  onClickRadioTurnOff(): void {
    this.showJSON = false;

    console.log("Ẩn myFormModel");
  }
}