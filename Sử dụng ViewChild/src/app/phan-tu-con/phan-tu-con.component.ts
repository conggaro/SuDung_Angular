import { Component } from '@angular/core';

@Component({
  selector: 'app-phan-tu-con',
  templateUrl: './phan-tu-con.component.html',
  styleUrls: ['./phan-tu-con.component.css']
})
export class PhanTuConComponent {
  // khai báo thuộc tính họ tên
  public ho_ten!: string;

  // khai báo thuộc tính tuổi
  public tuoi!: number;

  // hàm khởi tạo
  constructor(){
    // khởi tạo mặc định
    // cho thuộc tính ho_ten là "Nguyễn Văn A"
    this.ho_ten = "Nguyễn Văn A";

    // khởi tạo mặc định
    // cho thuộc tính tuoi là 20
    this.tuoi = 20;
  }

  // phương thức hiển thị
  public HienThi(): void {
    console.log(`Họ tên: ${this.ho_ten}, tuổi: ${this.tuoi}`);
  }
}
