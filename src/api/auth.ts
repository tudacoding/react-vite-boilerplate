import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { useAuthStore } from "@/store/auth";
import type { AuthResponse, LoginResponse } from "@/types/auth";
import { useNavigate } from "@tanstack/react-router";

export const useGoogleAuth = () => {
  const { setUserInfo } = useAuthStore();
  const navigate = useNavigate();
  const loginWithGoogle = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstance.get<LoginResponse>("/auth/google");
      return data;
    },
    onSuccess: (data) => {
      window.location.href = data.url;
    },
  });

  const verifyGoogleCallback = useMutation({
    mutationFn: async ({
      access_token,
      refresh_token,
      provider_token,
    }: {
      access_token: string;
      refresh_token: string;
      provider_token: string;
    }) => {
      const { data } = await axiosInstance.post<AuthResponse>(`/auth/verify`, {
        access_token,
        refresh_token,
        provider_token,
      });
      return data;
    },
    onSuccess: (data) => {
      setUserInfo({
        id: data.session.user.id,
        email: data.session.user.email,
        name: data.session.user.user_metadata.name,
        full_name: data.session.user.user_metadata.full_name,
        avatar_url: data.session.user.user_metadata.avatar_url,
        access_token: data.session.access_token,
        expires_at: data.session.expires_at,
        expires_in: data.session.expires_in,
        refresh_token: data.session.refresh_token,
        token_type: data.session.token_type,
      });
      navigate({ to: "/admin/dashboard" });
    },
    onError: () => {
      navigate({ to: "/admin/login" });
    },
  });

  return {
    loginWithGoogle,
    verifyGoogleCallback,
  };
};
