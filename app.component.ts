import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComboBox_Tinh_ThanhPho';

  // tạo mảng
  // cities là những thành phố
  // district là huyện
  public cities = [
    {
      city: "Chọn tỉnh/thành phố",
      district: [
        "Chọn quận/huyện"
      ]
    },
    {
      city: "An Giang",
      district: [
        "Thành phố Long Xuyên",
        "Thành phố Châu Đốc",
        "Thị xã Tân Châu",
        "Huyện An Phú",
        "Huyện Châu Phú",
        "Huyện Châu Thành",
        "Huyện Chợ Mới",
        "Huyện Phú Tân",
        "Huyện Thoại Sơn",
        "Huyện Tịnh Biên",
        "Huyện Tri Tôn"
      ]
    },
    {
      city: "Bà Rịa - Vũng Tàu",
      district: [
        "Thành phố Vũng Tàu",
        "Thị xã Bà Rịa",
        "Thị xã Phú Mỹ",
        "Huyện Châu Đức",
        "Huyện Côn Đảo",
        "Huyện Đất Đỏ",
        "Huyện Long Điền",
        "Huyện Tân Thành",
        "Huyện Xuyên Mộc"
      ]
    },
    {
      city: "Bạc Liêu",
      district: [
        "Thành phố Bạc Liêu",
        "Huyện Đông Hải",
        "Huyện Giá Rai",
        "Huyện Hòa Bình",
        "Huyện Hồng Dân",
        "Huyện Phước Long",
        "Huyện Vĩnh Lợi"
      ]
    },
    {
      city: "Bắc Kạn",
      district: [
        "Thị xã Bắc Kạn",
        "Huyện Ba Bể",
        "Huyện Bạch Thông",
        "Huyện Chợ Đồn",
        "Huyện Chợ Mới",
        "Huyện Na Rì",
        "Huyện Ngân Sơn",
        "Huyện Pác Nặm"
      ]
    },
    {
      city: "Hà Nội",
      district: [
        "Quận Ba Đình",
        "Huyện Ba Vì",
        "Quận Bắc Từ Liêm",
        "Quận Cầu Giấy",
        "Huyện Chương Mỹ",
        "Huyện Đan Phượng",
        "Huyện Đông Anh",
        "Quận Đống Đa",
        "Huyện Gia Lâm",
        "Quận Hà Đông",
        "Quận Hai Bà Trưng",
        "Huyện Hoài Đức",
        "Quận Hoàn Kiếm",
        "Quận Hoàng Mai",
        "Quận Long Biên",
        "Huyện Mê Linh",
        "Huyện Mỹ Đức",
        "Quận Nam Từ Liêm",
        "Huyện Phú Xuyên",
        "Huyện Phúc Thọ",
        "Huyện Quốc Oai",
        "Huyện Sóc Sơn",
        "Thị xã Sơn Tây",
        "Quận Tây Hồ",
        "Huyện Thạch Thất",
        "Huyện Thanh Oai",
        "Huyện Thanh Trì",
        "Quận Thanh Xuân",
        "Huyện Thường Tín",
        "Huyện Ứng Hòa"
      ]
    },
    {
      city: "Hải Phòng",
      district: [

      ]
    },
    {
      city: "TP. Hồ Chí Minh",
      district: [

      ]
    }
  ];

  // tạo hàm để hiển thị mảng
  public ngOnInit(): void {
    console.log("thành phố:", this.cities);
  }

  // tạo mảng districts
  // dùng để hứng dữ liệu tên quận/huyện
  public districts: any[] = ["Chọn quận/huyện"];

  // tạo hàm changeCity
  // để in ra tên tỉnh/thành phố
  public changeCity(event: any){
    // tạo biến tên tỉnh/thành phố
    let ten_Tinh_ThanhPho = event.target.value;

    if(!ten_Tinh_ThanhPho){
      return;
    }

    console.log("In ra tên thành phố:", ten_Tinh_ThanhPho);

    // hàm filter()
    // sẽ trả về 1 mảng
    // các kết quả thỏa mãn
    // nhưng ta chỉ cần 1 kết quả thôi
    // nên ta lấy luôn phần tử đầu tiên
    // phần tử đầu tiên là mang_tim_kiem[0]
    let mang_tim_kiem = this.cities.filter(function(item){
      return item.city === ten_Tinh_ThanhPho;
    });

    // nếu độ dài của  mang_tim_kiem > 0
    // thì gán phần tử đầu tiên
    // của mảng tìm kiếm cho districts
    if(mang_tim_kiem.length > 0){
      this.districts = mang_tim_kiem[0].district;
    }

    console.log("In ra mảng quận/huyện:", mang_tim_kiem);
  }
}