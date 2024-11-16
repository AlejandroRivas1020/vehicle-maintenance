import apiVehicleMaintenance from '../api/apiVehicleMaintenance';

export const fetchVehicles = async (filters: Record<string, string> = {}, token: string) => {
  try {
    const response = await apiVehicleMaintenance.get('/vehicles', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: filters,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching vehicles');
  }
};

export const createVehicle = async (vehicleData: Record<string, any>, token: string) => {
  try {
    const response = await apiVehicleMaintenance.post('/vehicles', vehicleData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating vehicle');
  }
};

export const updateVehicle = async (id: string, vehicleData: Record<string, any>, token: string) => {
  try {
    const response = await apiVehicleMaintenance.patch(`/vehicles/${id}`, vehicleData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error updating vehicle');
  }
};

export const deleteVehicle = async (id: string, token: string) => {
  try {
    await apiVehicleMaintenance.delete(`/vehicles/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error deleting vehicle');
  }
};

