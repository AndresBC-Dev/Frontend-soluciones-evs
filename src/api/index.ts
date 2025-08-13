// Config
export { default as apiClient } from './config/axios';

// Services
export { authService } from './services/auth.service';
export { criteriaService } from './services/criteria.service';
// ... otros servicios

// Types
export * from './types/api.types';

// Hooks
export { useAuth, AuthProvider } from '../hooks/useAuth';
