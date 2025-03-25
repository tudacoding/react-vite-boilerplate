import { createFileRoute } from "@tanstack/react-router";
import AdminLayout from "../layouts/AdminLayout";
import { ProtectedRoute } from "@/components/admin/auth/ProtectedRoute";
import { useAuthStore } from "@/store/auth";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const userInfo = useAuthStore((state) => state.userInfo);

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="mb-4 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800">
            Thông tin người dùng
          </h2>
          <div className="mt-2 text-black">
            <p>
              <span className="font-medium">Tên người dùng:</span>{" "}
              {userInfo?.name || "Chưa có thông tin"}
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              {userInfo?.email || "Chưa có thông tin"}
            </p>
            <img src={userInfo?.avatar_url} alt="Avatar" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900">
              Tổng số người dùng
            </h3>
            <p className="mt-2 text-3xl font-bold text-indigo-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900">
              Phiên hoạt động
            </h3>
            <p className="mt-2 text-3xl font-bold text-indigo-600">56</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900">
              Tổng doanh thu
            </h3>
            <p className="mt-2 text-3xl font-bold text-indigo-600">$12,345</p>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
