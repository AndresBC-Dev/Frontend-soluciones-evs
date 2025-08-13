import apiClient from '../config/axios';
import type { LoginRequest, LoginResponse, RefreshTokenRequest, UserResponseDTO } from '../types/api.types';

export const authService = {
  // Login
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
    return response.data;
  },

  // Logout
  logout: async (): Promise<void> => {
    await apiClient.post('/auth/logout');
    // Limpiar localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  },

  // Refresh Token
  refreshToken: async (refreshTokenData: RefreshTokenRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/auth/refresh', refreshTokenData);
    return response.data;
  },

  // Get current user
  getCurrentUser: async (): Promise<UserResponseDTO> => {
    const response = await apiClient.get<UserResponseDTO>('/me');
    return response.data;
  },

  // Verificar si el usuario está autenticado
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('accessToken');
    return !!token;
  },

  // Obtener token del localStorage
  getToken: (): string | null => {
    return localStorage.getItem('accessToken');
  },

  // Guardar datos de login en localStorage
  saveAuthData: (loginResponse: LoginResponse): void => {
    localStorage.setItem('accessToken', loginResponse.accessToken);
    localStorage.setItem('refreshToken', loginResponse.refreshToken);
    localStorage.setItem('user', JSON.stringify(loginResponse.user));
  },

  // Obtener usuario del localStorage
  getUserFromStorage: (): UserResponseDTO | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
};
