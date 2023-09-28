// thêm thư viện
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// sử dụng FormBuilder
import {FormBuilder} from '@angular/forms';

// sử dụng Validators
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-use-reactive-form',
  templateUrl: './use-reactive-form.component.html',
  styleUrls: ['./use-reactive-form.component.css']
})

// khai báo lớp
export class UseReactiveFormComponent {
  // hàm khởi tạo
  public constructor(
    private formBuilder: FormBuilder
  )
  {

  }
  
  // khai báo thuộc tính

  // cách 1:
  // sử dụng "FormGroup" và "FormControl"
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(""),
  //   age: new FormControl("")
  // });


  // cách 2:
  // sử dụng "FormBuilder"
  public formData: any = this.formBuilder.group({
    name: ["", Validators.required],
    age: ["", Validators.required]
  });


  // khai báo phương thức
  public onSubmit(): void{
    console.log(this.formData.value);
  }
}
