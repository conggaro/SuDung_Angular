import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, AfterViewInit{
  @ViewChildren("template_variable_p") List_p!: QueryList<HTMLParagraphElement>;

  constructor(){
    console.log("Giai đoạn constructor:\n", this.List_p);
  }

  ngOnInit(): void {
    console.log("\nGiai đoạn OnInit:\n", this.List_p);
  }

  ngAfterViewInit(): void {
    console.log("\nGiai đoạn AfterViewInit:\n", this.List_p);

    console.log("\nPhần tử đầu của list (Giai đoạn AfterViewInit):\n", this.List_p.first);
    
    console.log("\nPhần tử cuối của list (Giai đoạn AfterViewInit):\n", this.List_p.last);

    console.log("\nĐộ dài (Giai đoạn AfterViewInit):\n", this.List_p.length);

    // phải sử dụng map()
    // thì mới lấy được mảng
    // các phần tử của ViewChild
    let data: any[] = this.List_p.map((x) => {
      return x;
    });

    console.log("\nMảng các phần tử bên trong ViewChildren (Giai đoạn AfterViewInit):\n", data);
  }
}
