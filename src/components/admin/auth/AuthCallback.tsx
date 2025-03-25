import { useEffect, useRef } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useGoogleAuth } from "@/api/auth";
import { Route as CallbackRoute } from "@/routes/auth/callback";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { accessToken, providerToken, refreshToken } = useSearch({
    from: CallbackRoute.id,
  });
  const { verifyGoogleCallback } = useGoogleAuth();
  const hasCalledVerify = useRef(false);

  useEffect(() => {
    if (accessToken && !hasCalledVerify.current) {
      hasCalledVerify.current = true;
      verifyGoogleCallback.mutate({
        access_token: accessToken,
        refresh_token: refreshToken ?? "",
        provider_token: providerToken ?? "",
      });
    } else {
      navigate({ to: "/admin/login" });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4" />
        <p className="text-gray-500">Đang xử lý đăng nhập...</p>
      </div>
    </div>
  );
}
