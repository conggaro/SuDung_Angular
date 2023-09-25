// thêm thư viện
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangSo1Component } from './trang-so1/trang-so1.component';
import { TrangSo2Component } from './trang-so2/trang-so2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// tạo biến routes
// có kiểu dữ liệu Routes
const routes: Routes = [
  {path: "trang-so1", component: TrangSo1Component},
  {path: "trang-so2", component: TrangSo2Component},
  
  // dòng code này có tác dụng
  // nếu không tìm thấy trang
  // tương ứng với đường dẫn
  // thì sẽ chuyển hướng bạn đến trang "Page Not Found"
  {path: "**", component: PageNotFoundComponent}
];

// khai báo decorator @NgModule()
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// khai báo lớp
export class AppRoutingModule { }