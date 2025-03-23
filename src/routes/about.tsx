import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout";

export const Route = createFileRoute("/about")({
  component: () => (
    <MainLayout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-xl text-gray-600">
          Learn more about our company and mission
        </p>
      </div>
    </MainLayout>
  ),
});
