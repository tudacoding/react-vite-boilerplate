import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-800">
                  Logo
                </Link>
              </div>
              <div className="ml-6 flex items-center space-x-4">
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="">{children}</main>
    </div>
  );
};

export default MainLayout;
