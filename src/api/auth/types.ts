import type { UserResponseDTO } from '../user/types';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserResponseDTO;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}