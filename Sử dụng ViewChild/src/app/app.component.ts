import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, QueryList } from '@angular/core';

// thêm thư viện PhanTuConComponent
// để sử dụng kiểu dữ liệu "PhanTuConComponent"
import { PhanTuConComponent } from './phan-tu-con/phan-tu-con.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, AfterViewInit {
  /*
    khi bạn không thiết lập static
    cho ViewChild
    thì mặc định nó sẽ là "false"
    
    nếu static = false
    thì bạn chỉ có thể truy cập biến ViewChild
    ở giai đoạn AfterViewInit

    nếu static = true
    thì bạn chỉ có thể truy cập biến ViewChild
    ở giai đoạn OnInit
    và giai đoạn AfterViewInit

    => Tôi đã console.log() cái biến ViewChild
    ra ngoài màn hình "dev tool" để biết được giai đoạn
    mà có thể truy cập biến ViewChild
  */
  
  
  // khai báo biến div_1 là ViewChild
  // để tham chiếu đến "template variable"
  @ViewChild("template_variable_div_1") div_1!: ElementRef<HTMLDivElement>;


  // tạo biến div_2 là ViewChild
  @ViewChild("template_variable_div_2", {
    read: ElementRef,
    static: true
  }) div_2!: ElementRef<HTMLDivElement>;


  // tạo biến pt_Con là ViewChild
  @ViewChild("template_variable_PhanTuCon", {
    static: false,              // static mặc định của ViewChild là false
    read: PhanTuConComponent    // read giúp trình biên dịch query cho chính xác
  }) pt_Con!: QueryList<PhanTuConComponent>;


  constructor(){
    console.log("constructor() thông báo về (thẻ div 1):\n", this.div_1);
    console.log("constructor() thông báo về (thẻ div 2):\n", this.div_2);
    console.log("constructor() thông báo về (thẻ app-phan-tu-con):\n", this.pt_Con);
  }


  public ngOnInit(): void {
    console.log("\n\nngOnInit() thông báo (thẻ div 1):\n", this.div_1);
    console.log("ngOnInit() thông báo (thẻ div 2):\n", this.div_2);
    console.log("ngOnInit() thông báo về (thẻ app-phan-tu-con):\n", this.pt_Con);
  }


  public ngAfterViewInit(): void {
    console.log("\n\nngAfterViewInit() thông báo (thẻ div 1):\n", this.div_1);
    console.log("ngAfterViewInit() thông báo (thẻ div 2):\n", this.div_2);
    console.log("ngAfterViewInit() thông báo về (thẻ app-phan-tu-con):\n", this.pt_Con);
  }
}
