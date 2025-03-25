import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "@/components/admin/auth/AuthProvider";
export const Route = createRootRoute({
  component: () => (
    <>
      <AuthProvider>
        <Outlet />
        <TanStackRouterDevtools />
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </>
  ),
});
