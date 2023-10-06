import { Component } from '@angular/core';
import { DichVuService } from '../Services/dich-vu.service';

@Component({
  selector: 'b-component',
  templateUrl: './phan-tu-b.component.html',
  styleUrls: ['./phan-tu-b.component.css']
})

export class PhanTuBComponent {
  public khoi_tao: number = 0;

  constructor(
    private cService: DichVuService,
    private doi_tuong: DichVuService
  ) { }

  handleButtonClick(e: any) {
    // cái tham số e
    // có kiểu dữ liệu là PointerEvent

    debugger;

    this.cService.buttonSubject.next(e);

    // tăng biến khởi tạo lên 1
    ++ this.khoi_tao;

    this.doi_tuong.dem$.next(this.khoi_tao);
  }
}