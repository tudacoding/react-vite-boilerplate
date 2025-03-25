import { useEffect } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useGoogleAuth } from "@/api/auth";
import { Route as CallbackRoute } from "@/routes/auth/callback";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { code } = useSearch({ from: CallbackRoute.id });
  const { handleGoogleCallback } = useGoogleAuth();

  useEffect(() => {
    if (code) {
      handleGoogleCallback.mutate(code, {
        onSuccess: () => {
          navigate({ to: "/admin/dashboard" });
        },
        onError: () => {
          navigate({ to: "/admin/login" });
        },
      });
    } else {
      navigate({ to: "/admin/login" });
    }
  }, [code, handleGoogleCallback, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4" />
        <p className="text-gray-500">Đang xử lý đăng nhập...</p>
      </div>
    </div>
  );
}
