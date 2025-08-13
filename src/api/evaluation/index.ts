import type { AxiosResponse } from 'axios';
import apiClient from '../axiosInstance';
import type {
  CreateEvaluationsFromTemplateRequestDTO,
  AssignedCriteriaScoreDTO,
  EvaluationReportDTO,
} from './types';

export const evaluationService = {
  getAll: async (): Promise<AxiosResponse<any>> =>
    apiClient.get('/evaluations'),

  createFromTemplate: async (
    data: CreateEvaluationsFromTemplateRequestDTO
  ): Promise<AxiosResponse<any>> =>
    apiClient.post('/evaluations/from-template', data),

  getReport: async (id: string): Promise<AxiosResponse<EvaluationReportDTO>> =>
    apiClient.get(`/evaluations/${id}/report`),

  updateScore: async (
    id: string,
    data: AssignedCriteriaScoreDTO
  ): Promise<AxiosResponse<any>> =>
    apiClient.put(`/evaluations/${id}/score`, data),

  getUserEvaluations: async (): Promise<AxiosResponse<any>> =>
    apiClient.get('/me/evaluations'),
};