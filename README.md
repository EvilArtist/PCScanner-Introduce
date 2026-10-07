# PCScanner — website giới thiệu

Website tĩnh HTML + CSS + JavaScript, không cần ảnh, thư viện ngoài hoặc bước build. Giao diện tiếng Việt, hỗ trợ điện thoại và máy tính.

## Chỉnh link tải

Sửa `downloads` trong `app.js`:
- `desktop.url`: link tệp cài Windows hoặc trang GitHub Releases.
- `mobile.url`: link tham gia thử nghiệm Google Play, link APK, hoặc trang app khi đã công khai.
- Sửa `label` và `note` tương ứng với trạng thái phát hành thực tế.

Đồng thời cập nhật href và ghi chú tương ứng trong `index.html` để người tắt JavaScript vẫn thấy link đúng.

Hiện link Windows mở trang Releases của repository desktop. Nút Android dùng link tạm do chủ dự án cung cấp: https://googleplay.com/example/updatelater. Thay bằng link opt-in thật từ tab Testers trong app.js và index.html trước khi chia sẻ trang cho người dùng. Chỉ người có quyền tham gia mới tải được bản internal.

## Publish lên GitHub Pages

1. Tạo repository dành cho website, ví dụ `pcscanner-site`.
2. Upload **nội dung bên trong thư mục này** vào gốc repository: `index.html`, `styles.css`, `app.js`, `.nojekyll` (README là tùy chọn).
3. Vào Settings → Pages.
4. Chọn Source: Deploy from a branch.
5. Chọn branch `main`, thư mục `/ (root)`, rồi Save.
6. Đợi GitHub triển khai và dùng URL hiển thị trong Settings → Pages.

Nếu đặt trang trong repository hiện có, GitHub Pages cho phép chọn gốc hoặc `/docs`. Hãy chép các file vào `/docs` nếu muốn giữ riêng tài liệu/website trong repo đó. Không cần đổi đường dẫn CSS/JS vì trang dùng đường dẫn tương đối.

## Xem trước

Mở `index.html` trực tiếp bằng trình duyệt, hoặc chạy một static HTTP server ở thư mục này. Các nút tải, mục hỏi đáp và liên kết nội bộ hoạt động không cần backend.

Trang chưa được publish. Không có analytics hay request bên ngoài khi tải trang; các link tải chỉ mở khi người dùng nhấp vào.


+
+## Chính sách riêng tư
+
+`privacy.html` có tiếng Việt và tiếng Anh, dùng chung `styles.css`, không cần JavaScript để đọc. Trang chủ có liên kết tại footer.
+
+Workflow hiện tại upload gốc repository nên sẽ đưa trang này lên cùng website khi push lên main. URL dự kiến với cấu hình GitHub Pages mặc định: https://evilartist.github.io/PCScanner-Introduce/privacy.html (nếu dùng tên miền riêng, thay bằng tên miền thực tế).
+
+Email trong chính sách hiện là privacy@example.com theo yêu cầu của chủ dự án. Đây là địa chỉ mẫu; thay cả hai phiên bản tiếng Việt/Anh bằng email thật và bỏ câu ghi chú email mẫu trước khi dùng URL này trên Google Play.
+
+Nội dung dựa trên luồng LAN v2 và lưu trữ hiện tại. Khi thay đổi SDK, dịch vụ, thời hạn lưu hoặc cơ chế xóa, cập nhật cả hai ngôn ngữ và Data safety. Cần thêm liên kết chính sách trong app ở một thay đổi riêng.
