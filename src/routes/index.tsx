import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import { Button } from "@/components/ui/button";
import MainLayout from "../layouts/MainLayout";

export const Route = createFileRoute("/")({
  component: () => (
    <MainLayout>
      <IndexPage />
    </MainLayout>
  ),
});

function IndexPage() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-8 mb-8">
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="logo react w-24 hover:filter hover:brightness-125"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8">Vite + React</h1>
        <div className="card bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors mb-4"
          >
            count is {count}
          </button>
          <p className="text-sm">
            Edit{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Button variant="default">Button ShadCN</Button>
        </div>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}
