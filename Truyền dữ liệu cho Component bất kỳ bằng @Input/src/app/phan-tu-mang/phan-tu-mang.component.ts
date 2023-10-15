import { Component, Input, OnInit, AfterViewInit } from '@angular/core';


// phương pháp thay thế decorator
// sử dụng "inputs array" trong @Component()
// để thay thế cho việc dùng @Input decorator.
@Component({
  selector: 'app-phan-tu-mang',
  templateUrl: './phan-tu-mang.component.html',
  styleUrls: ['./phan-tu-mang.component.css'],

  // nó sẽ là 1 mảng
  // chứa các phần tử có kiểu "string"
  inputs: ["thong_bao:notification-input"]
})


// Lưu ý:
// cách này thường
// không được khuyến cáo sử dụng
// như @Input


export class PhanTuMangComponent implements OnInit, AfterViewInit{
  // bạn đã tạo ra 1 biến thong_bao
  // và có biệt danh là "notification-input"
  @Input("notification-input") thong_bao!: string[];


  constructor(){
    console.log("constructor:", this.thong_bao);
  }


  public ngOnInit(): void {
    console.log("ngOnInit:", this.thong_bao);
  }


  public ngAfterViewInit(): void {
    console.log("ngAfterViewInit:", this.thong_bao);
  }
}
