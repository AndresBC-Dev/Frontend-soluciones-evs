import type { UserResponseDTO } from '../user/types';

export interface CreateCriteriaRequestDTO {
  name: string;
  category: string;
  weight: number;
}

export interface UpdateCriteriaRequestDTO {
  name?: string;
  category?: string;
  weight?: number;
}

export interface CriteriaDTO {
  id: string;
  name: string;
  category: string;
  weight: number;
}

export interface CriteriaListResponseDTO {
  criteria: CriteriaDTO[];
}

export interface TemplateCriteriaByCategoryResponseDTO {
  [category: string]: CriteriaDTO[];
}

export interface EvaluationSummaryDTO {
  totalEvaluations: number;
  averageScore: number;
  topPerformers: UserResponseDTO[];
}