---
name: video-content-ev-dao
description: Dựng và sửa video research cho EV+ DAO từ bài X, sử dụng brand kit, xuất MP4 và HTML có timeline nhận góp ý.
---
# Video content EV DAO

Đọc bài nguồn bằng browser và đối chiếu infographic đính kèm. Chọn một ý chính cho video. Ghi rõ thời điểm, đơn vị và kỳ so sánh. Với một con số đang tranh cãi, giữ chữ “reported” hoặc “disputed” cạnh số liệu.

Dùng brand kit trong `assets/EV+ DAO/`. Tra tokens.json cho màu và typography, components/ cho ô số liệu, bảng và biểu đồ. Đặt logo chính thức ở góc phải. Viết nội dung video bằng tiếng Anh, trao đổi feedback bằng tiếng Việt.

Dựng ngang 1920×1080, 30 fps. Mặc định 7–10 giây cho một insight, có thể dùng 15 giây cho recap nhiều mốc. Giữ một bố cục liên tục, ưu tiên bảng hoặc cột cùng thang đo. Cho nhãn hiện trước, số tăng dần rồi dừng đủ lâu để đọc. So le thời điểm bắt đầu và duy trì chuyển động tới frame cuối.

Sao chép project mẫu sang projects/<slug>. Trong edl.json đổi plugins sang đường dẫn mới và đặt total theo số frame. Chỉnh drawHeader và các panel trong motion.js. Giữ số cùng cột thẳng hàng, có khoảng cách với đường biểu đồ. Dùng lệnh render trong README.md.

Bàn giao MP4 và preview.html tự chứa. Với mỗi lần render, tạo chapters.json theo các mốc animation thực tế và chạy scripts/review.py. Mở HTML, phát video, thử nhảy mốc và lưu góp ý. Khi sửa theo feedback, đối chiếu timestamp với bản được review.
