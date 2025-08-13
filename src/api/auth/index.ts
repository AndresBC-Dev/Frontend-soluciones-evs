import type { AxiosResponse } from 'axios';
import apiClient from '../axiosInstance';
import type { LoginRequest, LoginResponse, RefreshTokenRequest } from './types';
import type { UserResponseDTO } from '../user/types';

export const authService = {
  login: async (credentials: LoginRequest): Promise<AxiosResponse<LoginResponse>> =>
    apiClient.post('/auth/login', credentials),

  logout: async (): Promise<AxiosResponse<void>> =>
    apiClient.post('/auth/logout'),

  refreshToken: async (request: RefreshTokenRequest): Promise<AxiosResponse<LoginResponse>> =>
    apiClient.post('/auth/refresh', request),

  getCurrentUser: async (): Promise<AxiosResponse<UserResponseDTO>> =>
    apiClient.get('/me'),
};