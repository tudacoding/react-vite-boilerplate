import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout";
import { useQuery } from "@tanstack/react-query";
export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const { isPending, error, data } = useQuery({
    queryKey: ["aboutData"],
    queryFn: () =>
      fetch(
        "https://tqb-enroll-api-dev.smoke-ant.com/page-settings/?attribute=banner&attribute=exam-search-dialog"
      ).then((res) => res.json()),
  });
  return (
    <MainLayout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Về Chúng Tôi</h1>
        {isPending && <p className="mt-4 text-xl">Đang tải...</p>}

        {error && (
          <p className="mt-4 text-xl text-red-600">
            Đã xảy ra lỗi: {error.message}
          </p>
        )}
        <div className="mt-4 text-red-600">
          <h2>{data && data[1].section}</h2>
          <p>{data && data[1].value}</p>
        </div>
      </div>
    </MainLayout>
  );
}
