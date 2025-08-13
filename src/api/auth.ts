// 1. ARCHIVO: src/api/auth.ts (Servicio de autenticación)
import apiClient from './config/axios';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: any; // O importa tu UserResponseDTO
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export const authService = {
  // Login
  login: async (credentials: LoginRequest) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response;
  },

  // Logout
  logout: async () => {
    const response = await apiClient.post('/auth/logout');
    return response;
  },

  // Refresh Token
  refreshToken: async (refreshTokenData: RefreshTokenRequest) => {
    const response = await apiClient.post('/auth/refresh', refreshTokenData);
    return response;
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await apiClient.get('/me');
    return response;
  },
};
