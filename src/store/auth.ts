import { create } from "zustand";
import type { UserInfo } from "@/types/auth";
import { cipher, decipher } from "@/lib/cipher";

interface AuthState {
  userInfo: UserInfo | null;
  isAuthenticated: boolean;
  setUserInfo: (userInfo: UserInfo | null) => void;
  logout: () => void;
  restoreUserInfo: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  userInfo: null,
  isAuthenticated: false,
  setUserInfo: (userInfo: UserInfo | null) => {
    set({ userInfo, isAuthenticated: !!userInfo });
    if (userInfo) {
      const authUserEncoded = cipher(import.meta.env.VITE_HASH_KEY)(
        JSON.stringify(userInfo)
      );
      localStorage.setItem("userInfo", authUserEncoded);
    }
  },
  logout: () => {
    localStorage.removeItem("userInfo");
    set({ userInfo: null });
  },
  restoreUserInfo: () => {
    const encodedUserInfo = localStorage.getItem("userInfo");
    if (encodedUserInfo) {
      const decodedUserInfo = decipher(import.meta.env.VITE_HASH_KEY)(
        encodedUserInfo
      );
      const userInfo = JSON.parse(decodedUserInfo) as UserInfo;
      set({ userInfo, isAuthenticated: true });
    }
  },
}));
