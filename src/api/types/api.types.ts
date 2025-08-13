// Tipos de Autenticación
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserResponseDTO;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

// Tipos de Usuario
export interface UserResponseDTO {
  id: number;
  name: string;
  email: string;
  role: string;
  position: string;
}

export interface UserCreateDTO {
  name: string;
  email: string;
  role: string;
  position: string;
}

export interface UserUpdateDTO {
  name?: string;
  email?: string;
  role?: string;
  position?: string;
}

export interface UserListResponseDTO {
  users: UserResponseDTO[];
  total: number;
  page: number;
  size: number;
}

// Tipos de Criterios
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
  id: number;
  name: string;
  category: string;
  weight: number;
}

export interface CriteriaListResponseDTO {
  criteria: CriteriaDTO[];
}

export interface TemplateCriteriaByCategoryResponseDTO {
  categories: Array<{
    category: string;
    criteria: CriteriaDTO[];
  }>;
}

export interface EvaluationSummaryDTO {
  totalEvaluations: number;
  averageScore: number;
  topPerformers: Array<{
    userId: number;
    userName: string;
    score: number;
  }>;
}

// Tipos de Evaluaciones
export interface CreateEvaluationsFromTemplateRequestDTO {
  templateId: number;
  userIds: number[];
  periodId: number;
}

export interface AssignedCriteriaScoreDTO {
  evaluationId: number;
  criteriaScores: Array<{
    criteriaId: number;
    score: number;
  }>;
}

export interface EvaluationReportDTO {
  evaluationId: number;
  user: UserResponseDTO;
  scores: Array<{
    criteria: CriteriaDTO;
    score: number;
  }>;
  average: number;
  comments: string;
}

// Tipos de Plantillas
export interface CreateEvaluationTemplateRequestDTO {
  name: string;
  criteria: Array<{
    criteriaId: number;
    weight: number;
  }>;
}

export interface UpdateEvaluationTemplateRequestDTO {
  name?: string;
  criteria?: Array<{
    criteriaId: number;
    weight: number;
  }>;
}

export interface EvaluationTemplateResponseDTO {
  id: number;
  name: string;
  criteria: Array<{
    criteriaId: number;
    weight: number;
    criteriaName?: string;
  }>;
}

export interface EvaluationTemplateListResponseDTO {
  templates: EvaluationTemplateResponseDTO[];
}

// Tipos de Períodos
export interface CreateEvaluationPeriodRequestDTO {
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface EvaluationPeriodDTO {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
}

// Tipos de Referencias
export interface RoleReferenceDTO {
  id: number;
  name: string;
}

export interface PositionReferenceDTO {
  id: number;
  name: string;
}

export interface ReferenceDataDTO {
  roles: RoleReferenceDTO[];
  positions: PositionReferenceDTO[];
  categories: string[];
}

// Tipos de respuesta API genéricos
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
  totalPages: number;
}
