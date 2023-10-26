# React + TypeScript + Vite
https://demo.awifi.vn/Requirement.
Ứng viên thực hiện làm bài test dưới đây:
- Ưu tiên sử dụng Material UI để xây dựng giao diện
- Hạn chế tối đa sử dụng thư viện khác hoặc giải pháp từ bên thứ 3
Viết 1 ứng dụng nhỏ bằng React
Viết một ứng dụng bằng React sử dụng Typescript gồm 2 tab như sau:
- Active tab tương ứng khi người dùng chọn [DONE]
Tab thông tin:
- Các trường: Tên chiến dịch, Mô tả (bắt buộc nhập trường Tên chiến dịch) [DONE]
Tab Chiến dịch con:
- Bao gồm một danh sách các chiến dịch con [DONE]
- Mặc định active Chiến dịch con 1 được tạo sẵn [DONE]
- Nút Add (+): [DONE]
- Để thêm mới một Chiến dịch con vào danh sách [DONE]
- Chiến dịch con mới mặc định chứa 1 quảng cáo [DONE]
- Một Chiến dịch con bao gồm: [DONE]
   - Thông tin chiến dịch con: Tên chiến dịch con, Trạng thái hoạt động (Bắt buộc nhập trường Tên chiến dịch con) [DONE]
   - Danh sách các quảng cáo của chiến dịch con [DONE]
   - Một quảng cáo bao gồm: [DONE]
   - Thông tin quảng cáo: Tên quảng cáo, Số lượng (Bắt buộc nhập cả 2 trường, trường Số lượng phải lớn hơn 0) [DONE]
- Nút Thêm (+): [DONE]
   - Để thêm mới một quảng cáo vào danh sách [DONE]
   - Danh sách quảng cáo của một chiến dịch con phải lớn hơn 0 [NOT YET]
- Số lượng của chiến dịch con (số hiển thị ở dưới tên chiến dịch con trong demo) bằng tổng số lượng của tất cả các quảng cáo [DONE]

Validation có 2 trường hợp:

Trường hợp 1: Khi chưa click nút submit Không hiển thị cảnh báo lỗi [DONE]

Trường hợp 2: Đã click vào nút submit Hiện cảnh báo lỗi cho tất cả các trường bắt buộc ở cả 2 Tab. Hiện cảnh báo lỗi cho tất cả các chiến dịch con (Chuyển tên chiến dịch con bị lỗi thành màu đỏ). [DONE]

submit [DONE]

- Toàn bộ thông tin trong hai tab hợp lệ (không có cảnh báo): Thành công [DONE]

- Ngược lại: Vui lòng điền đúng và đầy đủ thông tin và thực hiện validation với các trường bắt buộc nhập [DONE]

Dữ liệu chiến dịch

campaign: {

information: {

name: string

describe?: string

}

subCampaigns: [{

name: string

status: boolean

ads: [{

name: string

quantity: number

}]

}]

}

Ví dụ:
Tham khảo ứng dụng được tạo sẵn ở menu: Demo