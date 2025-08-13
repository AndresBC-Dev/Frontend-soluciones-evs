export interface ReferenceDataDTO {
  roles: RoleReferenceDTO[];
  positions: PositionReferenceDTO[];
  categories: string[];
}

export interface RoleReferenceDTO {
  id: string;
  name: string;
}

export interface PositionReferenceDTO {
  id: string;
  name: string;
}