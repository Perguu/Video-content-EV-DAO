# Video content EV DAO

Skill cho member dựng recap on-chain bằng bộ nhận diện EV+ DAO. Brand kit gốc nằm trong **assets/EV+ DAO/**, gồm logo, font, giấy phép font, design tokens và component mẫu.

**Xem thử:** tải repo về và mở `projects/evplus-abraxas-recap/preview.html` bằng trình duyệt. Bấm vào một mốc, ghi góp ý rồi sao chép danh sách gửi editor. Ghi chú lưu trong trình duyệt của người review.

**Cài skill:** chép thư mục repo vào thư mục skills của Codex với tên `video-content-ev-dao`. Gọi `$video-content-ev-dao` kèm link bài X và thời lượng mong muốn.

**Render lại mẫu:** cài Node.js, FFmpeg (trong PATH) và Python 3. Chạy từ gốc repo:

```sh
cd engines/canvas
npm ci
npm run setup
cd ../..
node engines/canvas/render.js projects/evplus-abraxas-recap all
python scripts/review.py projects/evplus-abraxas-recap
```

Trên Windows PowerShell có thể dùng npm.cmd. Video nằm trong local/render.mp4 của project. File preview.html chứa cả video và có thể gửi riêng. Khi đổi bài, cập nhật title và các cặp [giây, nhãn] trong chapters.json.

Renderer Canvas trích từ [motion-studio](https://github.com/maxvu159/motion-studio).
