// tôi sẽ thêm các thư viện
// lần lượt là các pha trong vòng đời
// của một component
import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
}
from '@angular/core';

// tạo biến @Component
// để trỏ đến thẻ <app-vong-doi-component>
@Component({
  selector: 'app-vong-doi-component',
  templateUrl: './vong-doi-component.component.html',
  styleUrls: ['./vong-doi-component.component.css']
})

// khai báo lớp
// sau khi khai báo lớp
// thì phải triển khai
// các interface được import
export class VongDoiComponentComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  // đầu tiên là hàm khởi tạo constructor
  public constructor(){
    console.log("index 0: constructor");
  }
  
  // thứ 2 là ngOnChanges()
  public ngOnChanges(changes: SimpleChanges): void {
    console.log("index 1: OnChanges");
  }

  // thứ 3 là ngOnInit()
  public ngOnInit(): void {
    console.log("index 2: OnInit");
  }

  // thứ 4 là ngDoCheck()
  public ngDoCheck(): void {
    console.log("index 3: DoCheck");
  }

  // thứ 5 là ngAfterContentInit()
  public ngAfterContentInit(): void {
    console.log("index 4: AfterContentInit");
  }

  // thứ 6 là ngAfterContentChecked()
  public ngAfterContentChecked(): void {
    console.log("index 5: AfterContentChecked");
  }

  // thứ 7 là ngAfterViewInit()
  public ngAfterViewInit(): void {
    console.log("index 6: AfterViewInit");
  }

  // thứ 8 là ngAfterViewChecked()
  public ngAfterViewChecked(): void {
    console.log("index 7: AfterViewChecked");
  }

  // thứ 9 là ngOnDestroy()
  public ngOnDestroy(): void {
    console.log("index 8: OnDestroy");
  }
}