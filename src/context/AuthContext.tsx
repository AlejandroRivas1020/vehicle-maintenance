import React, { createContext, useState, useContext, ReactNode } from 'react';
import { loginUser, storeToken } from '../api/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
  token: string | null;
  login: (data: LoginData) => Promise<boolean>;
  logout: () => void;
}


interface LoginData {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = async (data: LoginData): Promise<boolean> => {
    try {
      const response = await loginUser(data);
      const { access_token} = response.data;

      if (access_token) {
        setToken(access_token);
        await storeToken(access_token);
        return true;
      } else {
        console.error('Token not received in login response');
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    setToken(null);
    await AsyncStorage.removeItem('accessToken');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }
  return context;
};
