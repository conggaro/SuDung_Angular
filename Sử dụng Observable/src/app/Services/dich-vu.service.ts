import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DichVuService {
  // khai báo thuộc tính
  public buttonSubject: Subject<any> = new Subject();
  
  // khai báo thuộc tính
  // có tác dụng theo dõi sự kiện
  // khi có sự thay đổi
  public buttonObservable = this.buttonSubject.asObservable();

  // khai báo thuộc tính "đếm"
  // có giá trị khởi tạo là 0
  // tác dụng: dùng để đếm số lần click
  public dem$: any = new BehaviorSubject<number>(0);

  constructor() { }
}
