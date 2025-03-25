import { createFileRoute } from "@tanstack/react-router";
import AuthCallback from "@/components/admin/auth/AuthCallback";

export const Route = createFileRoute("/auth/callback/")({
  validateSearch: () => {
    // Lấy hash từ URL (phần sau dấu #)
    const hash = window.location.hash.substring(1);

    // Phân tích chuỗi hash thành các cặp key-value
    const params = new URLSearchParams(hash);

    // Lấy các giá trị cần thiết
    const accessToken = params.get("access_token");
    const expiresAt = params.get("expires_at");
    const expiresIn = params.get("expires_in");
    const providerToken = params.get("provider_token");
    const refreshToken = params.get("refresh_token");
    const tokenType = params.get("token_type");
    return {
      accessToken,
      expiresAt,
      expiresIn,
      providerToken,
      refreshToken,
      tokenType,
    };
  },
  component: AuthCallback,
});
