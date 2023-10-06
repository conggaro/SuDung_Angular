import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

  constructor() { }
}
