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
4. tạo module mới: ng generate module <tên_module>
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
4. Cái biến ho_ten trong TypeScript của "component con" nhận được "Nguyễn Văn A".
5. Thì bạn có thể {{ ho_ten }} ở HTML hoặc console.log() tùy ý.

# Sử dụng @Output
1. @Output() là một bộ trang trí (decorator).
2. Nó có tác dụng phát sự kiện từ "component con" đến "component cha".
3. Cụ thể: khi biến su_kien gọi phương thức emit()
4. Thì thẻ <app-phan-tu-con> sẽ tự động gọi phương thức Them_PhanTu_Cho_Mang()
5. Phần tử con thì phát sự kiện, phần tử cha thì đăng ký nhận sự kiện.

# Sử dụng toán tử phủ định "!"
1. public status: boolean = true;
2. console.log(!this.status); thì kết quả là "false"
3. console.log(!!this.status); thì kết quả là "true"

# Sử dụng *ngIf
- bước 1: <div *ngIf="item.isSendPortal == true; then notification_send"></div>.
- bước 2: "<ng-template #notification_send> <div>Đã gửi</div> </ng-template>".
- chú ý: nếu bạn không dùng <ng-template> thì bị báo lỗi đấy.

# Trong file lib.dom.d.ts
1. Hàm btoa()
2. Hàm atob()

# Hàm btoa() là "binary to ASCII".<br>
Đây là một hàm trong JavaScript được thiết kế để mã hóa "dữ liệu nhị phân" thành "chuỗi ASCII" sử dụng mã hóa Base64.<br>

Ví dụ:<br>
<code>const originalString = 'Hello, World!';
const encodedString = btoa(originalString);
console.log(encodedString); // SGVsbG8sIFdvcmxkIQ==
</code>

# Hàm atob() là "ASCII to binary".<br>
Đây là một hàm trong JavaScript được thiết kế để mã hóa "chuỗi ASCII" thành "dữ liệu nhị phân" sử dụng mã hóa Base64.<br>

Ví dụ:<br>
<code>const encodedString = 'SGVsbG8sIFdvcmxkIQ==';
const decodedString = atob(encodedString);
console.log(decodedString); // Hello, World!
</code>

# Điều hướng và truyền dữ liệu
Trong component A<br>
<code>const navigationExtras: NavigationExtras = {
          &emsp;&emsp;&emsp;&emsp;state: { id: 1, fullName: "Nguyen Van A"}
        };
        this.router.navigate(["/destination-route"], navigationExtras);</code>
<br><br>
Trong component B (destination route - tuyến đường đích)<br>
<code>const receiveData: any = this.router.getCurrentNavigation()?.extras.state;
    if (!!receiveData) {
      &emsp;&emsp;&emsp;&emsp;console.log(receiveData);
    }</code>

# URL
<pre>http://gitlab.tinhvanconsulting.com/unb/webapp.git</pre>

# Nếu bạn muốn hiển thị 1 biến ra ngoài màn hình (giống như console log)
<pre>&ltdiv [innerHTML]="model.text"&gt &lt/div&gt </pre>

# Hàm cắt lát slice()
Cắt ký tự từ trái sang phải<br>
<pre>let text = "Hello world!";
let result = text.substring(0, 2);</pre>
<br>
Cắt ký tự từ phải sang trái<br>
<pre>let text = "okkkk.";
if (text.endsWith(".")) {
    text = text.slice(0, -1); // Cắt ký tự cuối nếu là '.'
}
console.log(text); // Output: "okkkk"</pre>

# Câu lệnh để kiểm tra phiên bản mới nhất trong package.json
npm outdated

# Khi thỏa mãn 1 điều kiện thì mới áp dụng class CSS trong angular
<pre>[class.t7]="i === 5"</pre>
nếu i bằng 5 thì sẽ trả về class="t7", "t7" là css thứ 7

# Lấy phần tử trong Angular
<div>code HTML</div>
<br>
<pre>&ltdiv id="popup1"></pre>
<br>
<div>code TypeScript</div>
<pre>popup!: any; // đây là câu lệnh khai báo trong Class của code TypeScript</pre>
<pre>this.popup = &ltHTMLInputElement>document.getElementById('popup1');</pre>
