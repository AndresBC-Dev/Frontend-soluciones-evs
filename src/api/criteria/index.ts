import type { AxiosResponse } from 'axios';
import apiClient from '../axiosInstance';
import type {
  CreateCriteriaRequestDTO,
  UpdateCriteriaRequestDTO,
  CriteriaDTO,
  CriteriaListResponseDTO,
  TemplateCriteriaByCategoryResponseDTO,
  EvaluationSummaryDTO,
} from './types';

export const criteriaService = {
  getAll: async (): Promise<AxiosResponse<CriteriaListResponseDTO>> =>
    apiClient.get('/criteria'),

  create: async (data: CreateCriteriaRequestDTO): Promise<AxiosResponse<CriteriaDTO>> =>
    apiClient.post('/criteria', data),

  getGrouped: async (): Promise<AxiosResponse<TemplateCriteriaByCategoryResponseDTO>> =>
    apiClient.get('/criteria/grouped'),

  getSummary: async (): Promise<AxiosResponse<EvaluationSummaryDTO>> =>
    apiClient.get('/criteria/summary'),

  update: async (id: string, data: UpdateCriteriaRequestDTO): Promise<AxiosResponse<CriteriaDTO>> =>
    apiClient.put(`/criteria/${id}`, data),

  delete: async (id: string): Promise<AxiosResponse<void>> =>
    apiClient.delete(`/criteria/${id}`),
};