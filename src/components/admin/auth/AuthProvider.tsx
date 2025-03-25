import { useEffect } from "react";
import { useAuthStore } from "@/store/auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const restoreUserInfo = useAuthStore((state) => state.restoreUserInfo);

  useEffect(() => {
    restoreUserInfo();
  }, [restoreUserInfo]);

  return <>{children}</>;
}
