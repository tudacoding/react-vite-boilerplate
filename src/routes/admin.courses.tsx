import { createFileRoute } from "@tanstack/react-router";
import AdminLayout from "../layouts/AdminLayout";
import { ProtectedRoute } from "@/components/admin/auth/ProtectedRoute";

export const Route = createFileRoute("/admin/courses")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <div>courses</div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
