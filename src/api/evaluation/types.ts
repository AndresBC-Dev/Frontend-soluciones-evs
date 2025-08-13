import type { UserResponseDTO } from '../user/types';

export interface CreateEvaluationsFromTemplateRequestDTO {
  templateId: string;
  userIds: string[];
  periodId: string;
}

export interface CriteriaScore {
  criteriaId: string;
  score: number;
}

export interface AssignedCriteriaScoreDTO {
  evaluationId: string;
  criteriaScores: CriteriaScore[];
}

export interface EvaluationReportDTO {
  evaluationId: string;
  user: UserResponseDTO;
  scores: CriteriaScore[];
  average: number;
  comments: string[];
}