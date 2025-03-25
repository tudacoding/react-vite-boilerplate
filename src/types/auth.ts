export interface UserInfo {
  id: string;
  email: string;
  name: string;
  full_name: string;
  avatar_url: string;
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}
export interface User {
  id: string;
  email: string;
  user_metadata: {
    avatar_url: string;
    email: string;
    name: string;
    full_name: string;
  };
}

export interface AuthResponse {
  isValid: boolean;
  session: {
    access_token: string;
    expires_at: number;
    expires_in: number;
    refresh_token: string;
    token_type: string;
    user: User;
  };
}

export interface LoginResponse {
  url: string;
}
