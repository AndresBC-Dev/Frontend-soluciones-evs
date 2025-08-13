import { type AxiosResponse } from 'axios';
import apiClient from '../axiosInstance';
import type {
  EvaluationTemplateListResponseDTO,
  CreateEvaluationTemplateRequestDTO,
  UpdateEvaluationTemplateRequestDTO,
  EvaluationTemplateDTO,
  EvaluationTemplateResponseDTO,
} from './types';

export const templateService = {
  getAll: async (): Promise<AxiosResponse<EvaluationTemplateListResponseDTO>> =>
    apiClient.get('/templates'),

  create: async (
    data: CreateEvaluationTemplateRequestDTO
  ): Promise<AxiosResponse<EvaluationTemplateDTO>> =>
    apiClient.post('/templates', data),

  getById: async (id: string): Promise<AxiosResponse<EvaluationTemplateResponseDTO>> =>
    apiClient.get(`/templates/${id}`),

  update: async (
    id: string,
    data: UpdateEvaluationTemplateRequestDTO
  ): Promise<AxiosResponse<EvaluationTemplateDTO>> =>
    apiClient.put(`/templates/${id}`, data),

  delete: async (id: string): Promise<AxiosResponse<void>> =>
    apiClient.delete(`/templates/${id}`),

  clone: async (id: string): Promise<AxiosResponse<EvaluationTemplateDTO>> =>
    apiClient.post(`/templates/${id}/clone`),
};