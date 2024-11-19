import { useState } from 'react';
import { fetchVehicles, createVehicle, updateVehicle, deleteVehicle } from '../api/vehiclesService';
import { useAuth } from '../context/AuthContext';

type Vehicle = {
  id: string;
  licensePlate: string;
  make: string;
  model: string;
  year: number;
  photo: string | null;
};

export const useVehicles = () => {
  const { token } = useAuth();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getVehicles = async (filters: Record<string, string> = {}) => {
    if (!token) {
      setError('unauthorized');
      return;
    }
    setLoading(true);
    try {
      const data = await fetchVehicles(filters, token);
      setVehicles(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error fetching vehicles');
    } finally {
      setLoading(false);
    }
  };

  const addVehicle = async (vehicleData: Record<string, any>) => {
    if (!token) {
      setError('unauthorized');
      return;
    }
    setLoading(true);
    try {
      const newVehicle = await createVehicle(vehicleData, token);
      setVehicles((prev) => [...prev, newVehicle]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error creating vehicle');
    } finally {
      setLoading(false);
    }
  };

  const editVehicle = async (id: string, vehicleData: Record<string, any>) => {
    if (!token) {
      setError('unauthorized');
      return;
    }
    setLoading(true);
    try {
      const updatedVehicle = await updateVehicle(id, vehicleData, token);
      setVehicles((prev) =>
        prev.map((vehicle) => (vehicle.id === id ? updatedVehicle : vehicle))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error updating vehicle');
    } finally {
      setLoading(false);
    }
  };

  const removeVehicle = async (id: string) => {
    if (!token) {
      setError('unauthorized');
      return;
    }
    setLoading(true);
    try {
      await deleteVehicle(id, token);
      setVehicles((prev) => prev.filter((vehicle) => vehicle.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error deleting vehicle');
    } finally {
      setLoading(false);
    }
  };

  return {
    vehicles,
    loading,
    error,
    getVehicles,
    addVehicle,
    editVehicle,
    removeVehicle,
  };
};


