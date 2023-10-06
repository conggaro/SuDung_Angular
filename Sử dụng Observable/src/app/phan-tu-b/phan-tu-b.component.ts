import { Component } from '@angular/core';
import { DichVuService } from '../Services/dich-vu.service';

@Component({
  selector: 'b-component',
  templateUrl: './phan-tu-b.component.html',
  styleUrls: ['./phan-tu-b.component.css']
})

export class PhanTuBComponent {
  constructor(private cService: DichVuService) { }

  handleButtonClick(e: any) {
    this.cService.buttonSubject.next(e);
  }
}