import { createFileRoute } from "@tanstack/react-router";
import AuthCallback from "@/components/admin/auth/AuthCallback";

export const Route = createFileRoute("/auth/callback/")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      code: search.code as string | undefined,
    };
  },
  component: AuthCallback,
}); 