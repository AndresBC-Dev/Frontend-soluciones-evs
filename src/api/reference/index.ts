import type { AxiosResponse } from 'axios';
import apiClient from '../axiosInstance';
import type { ReferenceDataDTO } from './types';

export const referenceService = {
  getAll: async (): Promise<AxiosResponse<ReferenceDataDTO>> =>
    apiClient.get('/reference'),
};