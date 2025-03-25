import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { FaGoogle, FaGithub } from "react-icons/fa";

interface LoginFormProps {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const login = useAuth((state) => state.login);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const success = await login(email, password);
      if (success) {
        onSuccess?.();
      } else {
        setError("Email hoặc mật khẩu không chính xác");
      }
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else setError("Đã xảy ra lỗi khi đăng nhập");
    } finally {
      setIsLoading(false);
    }
  }

  const handleGoogleLogin = () => {
    // TODO: Implement Google login
    console.log("Google login clicked");
  };

  const handleGithubLogin = () => {
    // TODO: Implement Github login
    console.log("Github login clicked");
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Đăng nhập Admin</CardTitle>
        <CardDescription className="text-center">
          Đăng nhập để truy cập trang quản trị
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleGoogleLogin}
            type="button"
          >
            <FaGoogle className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={handleGithubLogin}
            type="button"
          >
            <FaGithub className="mr-2 h-4 w-4" />
            Github
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Hoặc tiếp tục với
            </span>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="admin@example.com"
            className="w-full"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Mật khẩu</Label>
            <Button 
              variant="link" 
              className="px-0 font-normal text-xs text-muted-foreground"
              type="button"
            >
              Quên mật khẩu?
            </Button>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            className="w-full"
            required
          />
        </div>

        {error && (
          <div className="text-sm text-red-500 text-center">{error}</div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button
          className="w-full"
          type="submit"
          form="login-form"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Đang đăng nhập...
            </>
          ) : (
            "Đăng nhập"
          )}
        </Button>
      </CardFooter>
      <form id="login-form" onSubmit={onSubmit} className="hidden" />
    </Card>
  );
}
