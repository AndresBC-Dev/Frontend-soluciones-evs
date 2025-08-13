import type { AxiosResponse } from 'axios';
import apiClient from '../axiosInstance';
import type {
  UserCreateDTO,
  UserUpdateDTO,
  UserResponseDTO,
  UserListResponseDTO,
} from './types';

export const userService = {
  getAll: async (): Promise<AxiosResponse<UserListResponseDTO>> =>
    apiClient.get('/users'),

  create: async (data: UserCreateDTO): Promise<AxiosResponse<UserResponseDTO>> =>
    apiClient.post('/users', data),

  getById: async (id: string): Promise<AxiosResponse<UserResponseDTO>> =>
    apiClient.get(`/users/${id}`),

  update: async (id: string, data: UserUpdateDTO): Promise<AxiosResponse<UserResponseDTO>> =>
    apiClient.put(`/users/${id}`, data),
};