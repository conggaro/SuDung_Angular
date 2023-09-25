import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // khai báo thuộc tính
  public chieu_rong: string = "400px";

  public chieu_cao: any = "300px";

  public duong_vien: string = "solid red 1px";

  public kich_thuoc_hop: any = "border-box";

  // thuộc tính phân quyền
  public phan_quyen: string = "";

  // khai báo phương thức
  // thiết lập quyền cho Admin
  public setupPermissionAdmin(): void{
    this.phan_quyen = "quyen_Admin";
  }

  // khai báo phương thức
  // thiết lập quyền cho User1
  public setupPermissionUser1(): void{
    this.phan_quyen = "quyen_User1";
  }

  // khai báo phương thức
  // thiết lập quyền cho User2
  public setupPermissionUser2(): void{
    this.phan_quyen = "quyen_User2";
  }
}
