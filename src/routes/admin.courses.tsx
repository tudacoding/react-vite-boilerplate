import { createFileRoute } from "@tanstack/react-router";
import AdminLayout from "../layouts/AdminLayout";
import { ProtectedRoute } from "@/components/admin/auth/ProtectedRoute";
import { useCoursesQuery, useDeleteCourseMutation } from "@/hooks/query/useCourses";
import { useState } from "react";
import { Course } from "@/types/courses";

export const Route = createFileRoute("/admin/courses")({
  component: RouteComponent,
});

function RouteComponent() {
  // Lấy dữ liệu khóa học sử dụng react-query
  const { data: courses, isLoading, error } = useCoursesQuery();
  const deleteMutation = useDeleteCourseMutation();
  
  // State cho việc hiển thị modal xác nhận xóa
  const [courseToDelete, setCourseToDelete] = useState<string | null>(null);

  // Xử lý xóa khóa học
  const handleDeleteCourse = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
      setCourseToDelete(null);
      alert("Xóa khóa học thành công!");
    } catch (error) {
      alert("Có lỗi xảy ra khi xóa khóa học");
      console.error(error);
    }
  };

  // Render nội dung trang
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Lỗi!</strong>
          <span className="block sm:inline"> Không thể tải dữ liệu khóa học.</span>
        </div>
      );
    }

    if (!courses || courses.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500">Không có khóa học nào.</p>
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => window.location.href = "/admin/courses/new"}
          >
            Thêm khóa học mới
          </button>
        </div>
      );
    }

    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Danh sách khóa học</h1>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => window.location.href = "/admin/courses/new"}
          >
            Thêm khóa học mới
          </button>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiêu đề</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày tạo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {courses.map((course: Course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{course.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(course.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {course.edited ? 'Đã chỉnh sửa' : 'Chưa chỉnh sửa'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href={`/admin/courses/${course.id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                      Xem
                    </a>
                    <a href={`/admin/courses/${course.id}/edit`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Sửa
                    </a>
                    <button 
                      onClick={() => setCourseToDelete(course.id)} 
                      className="text-red-600 hover:text-red-900"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal xác nhận xóa */}
        {courseToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Xác nhận xóa</h3>
              <p className="text-sm text-gray-500 mb-4">
                Bạn có chắc chắn muốn xóa khóa học này? Hành động này không thể hoàn tác.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setCourseToDelete(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  Hủy
                </button>
                <button
                  onClick={() => courseToDelete && handleDeleteCourse(courseToDelete)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="container mx-auto px-4 py-6">
          {renderContent()}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
