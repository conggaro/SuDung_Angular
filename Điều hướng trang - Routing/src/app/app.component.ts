import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // khai báo thuộc tính
  public chieu_rong: string = "400px";

  // any dịch ra tiếng Việt
  // là "bất kỳ"
  // kiểu dữ liệu "any" là kiểu dữ liệu "bất kỳ"
  public chieu_cao: any = "300px";

  public duong_vien: string = "solid red 1px";

  // thuộc tính kích thước hộp
  public kich_thuoc_hop: any = "border-box";
}