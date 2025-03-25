import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // TODO: Implement actual login logic
    if (email === "admin@example.com" && password === "admin123") {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => {
    set({ isAuthenticated: false });
  },
})); 