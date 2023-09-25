// thêm thư viện
import { Component } from '@angular/core';

// khai báo bộ trang trí (decorator)
// cụ thể là khai báo @Component()
@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})

// khai báo lớp
export class DrivenFormComponent {
  // khai báo thuộc tính
  public name: string = "";

  public age: number = 0;

  // khai báo phương thức
  public submitForm(): void{
    // in ra màn hình console
    console.log(`submit form: name = ${this.name}`);
    console.log(`submit form: age = ${this.age}`);
  }
}