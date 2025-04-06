import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { courseApi } from "@/api/courses";
import type { Course } from "@/types/courses";

// Định nghĩa các khóa truy vấn
const COURSES_KEYS = {
  all: ["courses"] as const,
  lists: () => [...COURSES_KEYS.all, "list"] as const,
  details: () => [...COURSES_KEYS.all, "detail"] as const,
  detail: (id: string) => [...COURSES_KEYS.details(), id] as const,
};

// Hook lấy danh sách khóa học
export function useCoursesQuery() {
  return useQuery({
    queryKey: COURSES_KEYS.lists(),
    queryFn: () => courseApi.getAll(),
    select(data) {
      return data.map((item) => ({
        ...item,
        edited: true,
      }));
    },
  });
}

// Hook lấy chi tiết khóa học
export function useCourseQuery(id: string) {
  return useQuery({
    queryKey: COURSES_KEYS.detail(id),
    queryFn: () => courseApi.getOne(id),
  });
}

// Hook để tạo mới khóa học
export function useCreateCourseMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newCourse: Omit<Course, "id">) => courseApi.create(newCourse),
    onSuccess: () => {
      // Làm mới danh sách khóa học trong react-query cache
      queryClient.invalidateQueries({ queryKey: COURSES_KEYS.lists() });
    },
  });
}

// Hook để cập nhật khóa học
export function useUpdateCourseMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Course> }) =>
      courseApi.update(id, data),
    onSuccess: (updatedCourse) => {
      queryClient.invalidateQueries({
        queryKey: COURSES_KEYS.detail(updatedCourse.id),
      });
      queryClient.invalidateQueries({ queryKey: COURSES_KEYS.lists() });
    },
  });
}

// Hook để xóa khóa học
export function useDeleteCourseMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => courseApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: COURSES_KEYS.lists() });
    },
  });
}
