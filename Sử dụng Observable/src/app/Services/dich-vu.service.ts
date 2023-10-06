import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DichVuService {
  // khai báo thuộc tính
  public buttonSubject: Subject<any> = new Subject();
  
  // khai báo thuộc tính
  public buttonObservable = this.buttonSubject.asObservable();

  constructor() { }
}
