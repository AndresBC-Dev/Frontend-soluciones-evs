import React, { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { authService } from '../api/auth';
import type { UserResponseDTO } from '../api/user/types'; // Importamos el tipo de usuario compartido

interface AuthContextType {
  token: string | null;
  user: UserResponseDTO | null;
  isLoading: boolean;
  loginUser: (data: { accessToken: string; refreshToken: string; user: UserResponseDTO }) => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserResponseDTO | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('accessToken');
      const storedRefreshToken = localStorage.getItem('refreshToken');

      if (storedToken && storedRefreshToken) {
        try {
          // Verificamos el usuario actual con /me
          const response = await authService.getCurrentUser();
          setUser(response.data);
          setToken(storedToken);
        } catch (error) {
          // Si falla, intentamos refresh
          try {
            const refreshResponse = await authService.refreshToken({ refreshToken: storedRefreshToken });
            localStorage.setItem('accessToken', refreshResponse.data.accessToken);
            localStorage.setItem('refreshToken', refreshResponse.data.refreshToken);
            setToken(refreshResponse.data.accessToken);
            setUser(refreshResponse.data.user);
          } catch (refreshError) {
            logoutUser();
          }
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const loginUser = (data: { accessToken: string; refreshToken: string; user: UserResponseDTO }) => {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    setToken(data.accessToken);
    setUser(data.user);
  };

  const logoutUser = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Error al logout:', error);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setToken(null);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ token, user, isLoading, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (undefined === context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};