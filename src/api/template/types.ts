export interface EvaluationTemplateDTO {
  id: string;
  name: string;
  criteria: { criteriaId: string; weight: number }[];
}

export interface EvaluationTemplateListResponseDTO {
  templates: EvaluationTemplateDTO[];
}

export interface CreateEvaluationTemplateRequestDTO {
  name: string;
  criteria: { criteriaId: string; weight: number }[];
}

export interface UpdateEvaluationTemplateRequestDTO {
  name?: string;
  criteria?: { criteriaId: string; weight: number }[];
}

export interface EvaluationTemplateResponseDTO extends EvaluationTemplateDTO {} // Alias si es necesario, basado en la API