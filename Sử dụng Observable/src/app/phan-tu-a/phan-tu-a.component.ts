import { Component } from '@angular/core';
import { DichVuService } from '../Services/dich-vu.service';

@Component({
  selector: 'a-component',
  templateUrl: './phan-tu-a.component.html',
  styleUrls: ['./phan-tu-a.component.css']
})

export class PhanTuAComponent {
  constructor(private cService: DichVuService) { }

  ngOnInit() {
    this.cService.buttonObservable.subscribe(e => {
      console.log('GET api');
    });
  }
}