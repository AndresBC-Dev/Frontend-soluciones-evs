import type { AxiosResponse } from 'axios';
import apiClient from '../axiosInstance';
import type { CreateEvaluationPeriodRequestDTO } from './types';

export const periodService = {
  getAll: async (): Promise<AxiosResponse<any>> =>
    apiClient.get('/periods'),

  create: async (data: CreateEvaluationPeriodRequestDTO): Promise<AxiosResponse<any>> =>
    apiClient.post('/periods', data),
};