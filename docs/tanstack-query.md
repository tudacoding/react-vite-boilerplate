- gọi dữ liệu khi mở vào tab chứa trang web nên gần như realtime
- dễ dùng, dễ sử dụng
- Quản lý và đồng bộ dữ liệu từ server

Tại sao state của server khác với state của client?
State của server khác với state của client vì:
✅ Lưu trữ từ xa: Dữ liệu không nằm trong trình duyệt của bạn mà trên máy chủ.
✅ Bất đồng bộ: Phải dùng API để lấy và cập nhật dữ liệu.
✅ Có thể bị thay đổi bởi người khác mà bạn không biết.
✅ Dữ liệu có thể bị lỗi thời nếu không được cập nhật đúng cách.

💡 Ví dụ:
Bạn đang xem danh sách đơn hàng, nhưng nhân viên khác vừa cập nhật trạng thái đơn hàng trên hệ thống. Nếu ứng dụng không tự động cập nhật dữ liệu, bạn vẫn thấy thông tin cũ.

Các thách thức khi quản lý server state
Quản lý dữ liệu từ server không chỉ là gọi API, mà còn nhiều vấn đề phức tạp như:
🔹 Caching: Lưu dữ liệu để tránh gọi API nhiều lần.
🔹 Gộp request: Tránh gọi nhiều API giống nhau cùng lúc.
🔹 Cập nhật dữ liệu nền: Tự động refetch khi dữ liệu lỗi thời.
🔹 Nhận diện khi nào dữ liệu cần làm mới.
🔹 Tối ưu hiệu suất: Phân trang, lazy loading.
🔹 Quản lý bộ nhớ: Xóa dữ liệu không cần thiết khỏi bộ nhớ.

React Query giúp bạn tự động hóa việc quản lý dữ liệu, tối ưu hiệu suất và cải thiện trải nghiệm người dùng một cách dễ dàng. 🚀
✨ Chỉ với vài dòng code, bạn đã có:
- Tự động fetch dữ liệu
- Quản lý trạng thái loading/error
- Cơ chế caching thông minh