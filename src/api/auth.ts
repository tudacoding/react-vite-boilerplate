import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@/lib/axios';
import { useAuthStore } from '@/store/auth';
import type { AuthResponse, LoginResponse } from '@/types/auth';

export const useGoogleAuth = () => {
  const { setUser, setToken } = useAuthStore();

  const loginWithGoogle = useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstance.get<LoginResponse>('/auth/google');
      return data;
    },
    onSuccess: (data) => {
      window.location.href = data.url;
    },
  });

  const handleGoogleCallback = useMutation({
    mutationFn: async (code: string) => {
      const { data } = await axiosInstance.get<AuthResponse>(`/auth/callback?code=${code}`);
      return data;
    },
    onSuccess: (data) => {
      setUser(data.user);
      setToken(data.token);
    },
  });

  return {
    loginWithGoogle,
    handleGoogleCallback,
  };
}; 