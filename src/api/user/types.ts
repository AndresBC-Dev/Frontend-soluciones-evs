export interface UserResponseDTO {
  id: string;
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
}