import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component {
  arrContext: string[] = ["Element 1", "Element 2"];

  // sử dụng ngModel
  elementStr: string = "";

  // sử dụng FormGroup
  form: FormGroup = new FormGroup({
    fullName: new FormControl()
  });

  // sử dụng ngModel
  modelObj: any = {
    valueStr: ""
  };

  // sử dụng FormGroup và FormBuilder
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      textStr: []
    });
    
  }

  onInputByUser(): void {
    console.log(this.elementStr);
  }

  onClickButtonByUser(): void {
    this.arrContext.push(this.elementStr);
  }

  onSubmitFormByUser(): void {
    this.arrContext.push(this.form.get("fullName")?.value);
  }

  onAddByUser(): void {
    this.arrContext.push(this.modelObj.valueStr);
  }

  onCreateByUser(): void {
    this.arrContext.push(this.myForm.get("textStr")?.value);
  }
}
