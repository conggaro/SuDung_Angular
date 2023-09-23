// thêm thư viện
import { Component } from '@angular/core';

/*
  để sử dụng lớp Logger
  thì bạn phải nhập khẩu lớp đó vào đây
  
  sau đó, bạn khai báo thuộc tính có kiểu Logger
*/
import { Logger } from './logger.service';


// cái @Component() là hàm
// người ta còn gọi là decorator (bộ trang trí)
@Component({
  selector: 'app-gioi-thieu-angular',
  templateUrl: './gioi-thieu-angular.component.html',
  styleUrls: ['./gioi-thieu-angular.component.css']
})

// khai báo lớp
export class GioiThieuAngularComponent {
  // khai báo thuộc tính
  public message: string = "Welcome to Angular";

  public id_01: string = "my-id";

  public mau_sac: string = "rgb(0, 150, 255)";

  public kieu_chu: string = "Arial";

  public kieu_NutNhan: any = "button";

  public trangThai_VoHieuHoa: boolean = false;


  // khai báo phương thức
  public ThongBao(): any{
    // tạo đối tượng
    let doi_tuong: any = new GioiThieuAngularComponent();

    alert(doi_tuong.message);

    // nếu lười tạo đối tượng
    // thì sử dụng this
    // tức là ở trong phạm vi class
    // thì mới có this để dùng
    console.log(`thông báo: ${this.message}`);
  }


  // chỗ này để viết sự kiện
  // cho cái button
  // trạng thái false: chỉ đọc
  // trạng thái true: cho phép sửa đoạn văn
  public message2: any = "Bạn chỉ được đọc!";

  public canEdit: boolean = false;

  public onEditClick(): void{
    // chuyển trạng thái
    this.canEdit = !(this.canEdit);

    console.log(`Trạng thái của canEdit: ${this.canEdit}`);

    if(this.canEdit == false){
      this.message2 = "Bạn chỉ được đọc!";
    }
    else if(this.canEdit == true){
      this.message2 = "Bây giờ, bạn có thể sửa đoạn văn này!";
    }
  }


  public chieu_rong: string = "400px";
  public chieu_cao: any = "300px";
  
  // khai báo phương thức
  // có kiểu trả về là string
  public duong_vien(): string{
    return "solid red 1px";
  }


  // chuẩn bị sử dụng ngIf
  // người ta còn gọi ngIf là directive
  // => dịch ra tiếng Việt là chỉ thị
  public trang_thai_DoanVan: boolean = true;

  public doi_TrangThai_DoanVan(): any{
    this.trang_thai_DoanVan = !(this.trang_thai_DoanVan);

    console.log(`Trạng thái đoạn văn: ${this.trang_thai_DoanVan}`);
  }


  // khai báo thuộc tính
  public count: number = 0;

  // khai báo thuộc tính
  // và cấp phát vùng nhớ có kiểu Logger
  // như này nó giống như tạo đối tượng rồi
  private dt_logger: Logger = new Logger();

  // khai báo phương thức
  public onLogMe(): void{
    /*
      trong cái phương thức onLogMe() này
      thì tôi sẽ gọi phương thức WriteCount()
      vì cái ý đồ tạo ra file logger.service.ts
      là để định nghĩa WriteCount() cho lớp khác dùng mà
    */
    
    
    // gọi phương thức WriteCount()
    this.dt_logger.WriteCount(this.count);


    // mỗi lần gọi phương thức onLogMe()
    // thì thuộc tính "count" sẽ tăng lên 1
    this.count ++;
  }
}
