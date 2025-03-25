import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { HomeIcon } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            Trang không tồn tại
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại
          </p>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <Button className="gap-2">
              <HomeIcon className="h-4 w-4" />
              Về trang chủ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
