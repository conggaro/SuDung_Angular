import { Component, Input, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-phan-tu-con',
  templateUrl: './phan-tu-con.component.html',
  styleUrls: ['./phan-tu-con.component.css']
})


export class PhanTuConComponent implements OnInit, AfterViewInit{
  // cái @Input còn được gọi là "decorator"
  // dịch ra tiếng Việt là "bộ trang trí"
  @Input() ho_ten: string = "";
  
  @Input() tuoi: number = 0;

  // ngoài "ho_ten" và "tuoi" ra
  // thì chúng ta có thể đặt biệt danh ALIAS cho PROPERTY
  @Input("gender-input") gioi_tinh: boolean = true;

  // cái @Input này cũng truyền được mảng luôn
  @Input() dia_chi: string[] = [];

  
  constructor(){
    console.log("constructor: ", this.ho_ten);
    console.log("constructor: ", this.tuoi);
    console.log("constructor: ", this.gioi_tinh);
    console.log("constructor: ", this.dia_chi);
  }


  public ngOnInit(): void {
    console.log("\n\nngOnInit: ", this.ho_ten);
    console.log("ngOnInit: ", this.tuoi);
    console.log("ngOnInit: ", this.gioi_tinh);
    console.log("ngOnInit: ", this.dia_chi);
  }


  public ngAfterViewInit(): void {
    console.log("\n\nngAfterViewInit: ", this.ho_ten);
    console.log("ngAfterViewInit: ", this.tuoi);
    console.log("ngAfterViewInit: ", this.gioi_tinh);
    console.log("ngAfterViewInit: ", this.dia_chi);
  }
}
