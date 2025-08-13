import apiClient from '../config/axios';
import type {
  CriteriaListResponseDTO,
  CreateCriteriaRequestDTO,
  UpdateCriteriaRequestDTO,
  TemplateCriteriaByCategoryResponseDTO,
  EvaluationSummaryDTO
} from '../types/api.types';

export const criteriaService = {
  // Obtener todos los criterios
  getCriteria: async (): Promise<CriteriaListResponseDTO> => {
    const response = await apiClient.get<CriteriaListResponseDTO>('/criteria');
    return response.data;
  },

  // Crear criterio
  createCriteria: async (criteria: CreateCriteriaRequestDTO): Promise<void> => {
    await apiClient.post('/criteria', criteria);
  },

  // Obtener criterios agrupados
  getCriteriaGrouped: async (): Promise<TemplateCriteriaByCategoryResponseDTO> => {
    const response = await apiClient.get<TemplateCriteriaByCategoryResponseDTO>('/criteria/grouped');
    return response.data;
  },

  // Obtener resumen de evaluaciones
  getEvaluationSummary: async (): Promise<EvaluationSummaryDTO> => {
    const response = await apiClient.get<EvaluationSummaryDTO>('/criteria/summary');
    return response.data;
  },

  // Actualizar criterio
  updateCriteria: async (id: number, criteria: UpdateCriteriaRequestDTO): Promise<void> => {
    await apiClient.put(`/criteria/${id}`, criteria);
  },

  // Eliminar criterio
  deleteCriteria: async (id: number): Promise<void> => {
    await apiClient.delete(`/criteria/${id}`);
  }
};
