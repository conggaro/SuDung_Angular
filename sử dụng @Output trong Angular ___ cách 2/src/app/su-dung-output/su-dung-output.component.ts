import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-su-dung-output',
  templateUrl: './su-dung-output.component.html',
  styleUrls: ['./su-dung-output.component.css']
})

export class SuDungOutputComponent {
  @Output() click_btn = new EventEmitter();

  
  // khai báo phương thức SuKien_Click()
  public SuKien_Click(): void{
    // nó sẽ kích hoạt click_btn
    // rồi cái click_btn sẽ kích hoạt phương thức HienThi()

    // hai cái SuKien_Click() và emit() chạy trước

    // 1. SuKien_Click() sẽ chạy

    // 2. phương thức .emit()

    // 3. cuối cùng mới đến HienThi()
    this.click_btn.emit();
  }
}
