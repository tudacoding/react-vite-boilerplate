import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/admin/auth/LoginForm";

export const Route = createFileRoute("/admin/login")({
  component: AdminLoginPage,
});

function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
          <p className="mt-2 text-sm text-gray-600">
            Đăng nhập để truy cập trang quản trị
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
