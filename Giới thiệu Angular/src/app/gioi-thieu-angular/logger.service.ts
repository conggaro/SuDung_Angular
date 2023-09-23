// thêm thư viện
import {
    Injectable
}
from "@angular/core";

// khai báo decorator @Injectable()
@Injectable(
    {
        providedIn: "root"
    }
)

// khai báo lớp
export class Logger{
    // chữ logger
    // có ý nghĩa giống như bộ máy ghi nhật ký


    // khai báo phương thức
    public WriteCount(thamSo: number): void{
        // hàm warn()
        // thì nó in ra kết quả
        // ở màn hình console
        // nó kiểu in ra kèm theo icon warning
        console.warn(`Thông báo: ${thamSo}`);
    }
}