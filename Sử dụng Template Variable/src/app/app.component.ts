import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hien_thi: string = "";
  public hien_thi2: any = "";

  // khai báo phương thức su_kien()
  // khi bấm vào button
  // để lấy số điện thoại
  public su_kien(thamSo: HTMLInputElement): void{
    this.hien_thi = thamSo.value;


    var serializer = new XMLSerializer();
    this.hien_thi2 = serializer.serializeToString(thamSo);


    console.log(thamSo);
  }


  public gia_tri: string = "Nguyễn Văn A";
  public gia_tri2: number = 20;


  // khai báo phương thức onSubmit()
  // khi bấm vào button
  // để lấy dữ liệu của đối tượng dt_form
  // có kiểu dữ liệu "NgForm"
  public onSubmit(dt_form: any): void{
    console.log(dt_form);

    console.log("Lấy ra họ tên:", dt_form.form.controls.ho_ten.value);
    console.log("Lấy ra tuổi:", dt_form.form.controls.tuoi.value);
  }
}
