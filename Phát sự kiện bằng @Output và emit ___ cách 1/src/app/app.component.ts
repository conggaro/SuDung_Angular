import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  // khai báo mảng
  public array_item: string[] = [
    "Việt Nam",
    "Mỹ",
    "Anh",
    "Nhật Bản",
    "Pháp"
  ];


  // khai báo phương thức Them_PhanTu_Cho_Mang
  public Them_PhanTu_Cho_Mang(thamSo: string) {
    // sử dụng phương thức push()
    // để thêm phần tử vào mảng
    this.array_item.push(thamSo);
  }
}
