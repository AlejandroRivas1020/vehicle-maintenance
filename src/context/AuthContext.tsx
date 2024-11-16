import React, { createContext, useState, useContext, ReactNode } from 'react';
import { registerUser, loginUser, storeToken } from '../api/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
  token: string | null;
  register: (data: RegisterData) => Promise<boolean>;
  login: (data: LoginData) => Promise<boolean>;
  logout: () => void;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  // Función de registro
  const register = async (data: RegisterData): Promise<boolean> => {
    try {
      const response = await registerUser(data);

      if (response && response.message === 'Usuario creado correctamente') {
        return true;
      } else {
        console.error('Error al registrar el usuario');
        return false;
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      return false;
    }
  };

  // Función de login
  const login = async (data: LoginData): Promise<boolean> => {
    try {
      const response = await loginUser(data);
      const { access_token, user } = response.data;

      if (access_token) {
        setToken(access_token);
        await storeToken(access_token);
        return true;
      } else {
        console.error('Token no recibido en la respuesta del login');
        return false;
      }
    } catch (error) {
      console.error('Error en el login:', error);
      return false;
    }
  };

  // Función de logout
  const logout = async () => {
    setToken(null);
    await AsyncStorage.removeItem('accessToken');
  };

  return (
    <AuthContext.Provider value={{ token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
