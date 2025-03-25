export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginResponse {
  url: string;
}

export interface CallbackResponse {
  code: string;
} 