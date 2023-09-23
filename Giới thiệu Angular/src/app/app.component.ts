import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DuAn_01';

  // khai báo thuộc tính
  public styleForBorder: string = "solid 1px red";

  public styleForWidth: string = "200px";
}
