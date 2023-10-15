# Sử dụng Angular
Vì 1 cái ứng dụng Angular nó rất nặng<br>
nên tôi chỉ lấy thư mục "src" thôi.
# Phần 1: Giới thiệu
1. Angular là một nền tảng (platform) được xây dựng trên TypeScript.
2. Học cách thêm thư viện (sử dụng từ khóa import).
3. Sử dụng thư viện Component.
4. Sử dụng bộ trang trí "decorator", cụ thể là @Component().
5. Liên kết dữ liệu của file .ts với file .html, ví dụ: <p>{{ message }}</p>
6. Sử dụng các thuộc tính có sẵn như [id], [style.color], [disabled], (click)
7. Sử dụng chỉ thị (directive), ví dụ: ngIf.
8. Kỹ năng chèn phụ thuộc (Dependency injection)<p>nó như kiểu tạo 1 lớp và viết các phương thức tự định nghĩa để cho lớp khác sử dụng.</p><p>ví dụ: tạo ra file logger.service.ts sau đó tạo lớp Logger.</p>
9. Những thư viện có thể dùng Router, Forms, HttpClient, Animations, PWA, Schematics.
10. Sản phẩm mà Angular mong muốn tạo ra là "ứng dụng đơn trang" SPA - Single Page Application.
# Những câu lệnh trong Angular
1. tạo dự án mới: ng new <tên_dự_án>
2. tạo component mới: ng generate component <tên_component>
3. tạo service mới: ng generate service <tên_service>
<br>
Chú ý:
<br>
1. Sử dụng "Command Prompt" để nhập các lệnh, sử dụng "PowerShell" thì hay bị báo lỗi lắm.
<br>
2. Nếu bạn muốn điều hướng đến thư mục trong Angular, thì bạn mở "Command Prompt" và sử dụng câu lệnh "cd".

# Two way binding
1. Property binding (từ Model cập nhật lên View).
2. Event binding (từ View gửi sự kiện về Model).
3. Inputs and Outputs.

# Sử dụng @Input
1. @Input() là một bộ trang trí (decorator).
2. Nó có tác dụng truyền dữ liệu từ "component cha" đến "component con".
3. Cụ thể: truyền dữ liệu "Nguyễn Văn A" từ HTML của "component cha" đến file TypeScript của "component con".
