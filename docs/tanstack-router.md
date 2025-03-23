SETUP PROJECT
- Using File-Based Route Generation giúp tạo ra router dựa vào cấu trúc thư mục 
- Khi thêm file mới trong folder routes thì tự động update routeTree.gen.ts
- Bỏ file App.tsx vì đã xử lý qua route index.tsx (HomePage)
- Load các CSS từ main.tsx
- Sử dụng admin.dashboard và admin.users để tạo router cho admin, sẽ có đường link /admin/dashboard và /admin/users