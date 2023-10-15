import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-phan-tu-con',
  templateUrl: './phan-tu-con.component.html',
  styleUrls: ['./phan-tu-con.component.css']
})


export class PhanTuConComponent implements OnInit, AfterViewInit {
  // đầu tiên
  // khai báo biến "sự kiện"
  // được cấp phát vùng nhớ có kiểu dữ liệu EventEmitter
  // cái string trong dấu ngoặc thì gọi là "generic"
  // biến "sự kiện" thì có dạng @Output
  @Output() su_kien = new EventEmitter<string>();


  // nếu bạn muốn đặt biệt danh ALIAS
  // cho biến sự kiện
  // thì viết như sau
  // @Output("variable-event-output") su_kien = new EventEmitter<string>();


  // sau khi khai báo biến "sự kiện"
  // thì bạn có thể dùng nó ở trong
  // cái thẻ <app-phan-tu-con>


  // khai báo phương thức ThemMoi_Item()
  public ThemMoi_Item(thamSo: string) {
    // khi bạn bấm button "submit"
    // thì chương trình sẽ gọi phương thức ThemMoi_Item()


    // sau đó
    // biến "su_kien" sẽ gọi phương thức emit()
    // để phát đi sự kiện
    // và gửi đi một "giá trị"


    this.su_kien.emit(thamSo);
  }


  // hàm khởi tạo
  constructor(){
    console.log("constructor:", this.su_kien);
  }


  // giai đoạn OnInit
  // của PhanTuCon Component
  public ngOnInit(): void {
    console.log("ngOnInit:", this.su_kien);
  }


  // giai đoạn AfterViewInit
  // của PhanTuCon Component
  public ngAfterViewInit(): void {
    console.log("ngAfterViewInit:", this.su_kien);
  }
}
