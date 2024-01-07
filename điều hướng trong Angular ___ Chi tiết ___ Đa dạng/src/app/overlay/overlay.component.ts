import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit, AfterViewInit {
  @ViewChild("myOverlay") myOverlay!: ElementRef<HTMLDivElement>;

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  onClickOverlay(): void {
    this.myOverlay.nativeElement.style.display = "none";
    
    this.router.navigate([""]);
  }
}
