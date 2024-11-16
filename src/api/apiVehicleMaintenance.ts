import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiVehicleMaintenance = axios.create({
  baseURL: 'https://maintenancesystembc-production.up.railway.app/api/v1',
  timeout: 10000,
});

apiVehicleMaintenance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiVehicleMaintenance;


