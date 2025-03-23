import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 min-h-screen">
          <div className="p-4">
            <h2 className="text-white text-xl font-bold">Admin Panel</h2>
          </div>
          <nav className="mt-4">
            <Link
              to="/admin/dashboard"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
            >
              Dashboard
            </Link>
            <Link
              to="/admin/users"
              className="block px-4 py-2 text-gray-300 hover:bg-gray-700"
            >
              Users
            </Link>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1">
          <header className="bg-white shadow">
            <div className="px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Admin</h1>
            </div>
          </header>
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 