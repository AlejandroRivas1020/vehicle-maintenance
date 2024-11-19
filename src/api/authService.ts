import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from './apiVehicleMaintenance';

interface LoginRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  message: string;
  data: {
    user: {
      email: string;
      id: string;
    };
  };
}


export const loginUser = async (data: LoginRequest): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post<AuthResponse>('/auth/login', data);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

export const storeToken = async (token: string | null) => {
  if (token) {
    try {
      await AsyncStorage.setItem('accessToken', token);
    } catch (error) {
      console.error('Error storing token:', error);
    }
  } else {
    console.error('The token is invalid:', token);
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('accessToken');
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};
