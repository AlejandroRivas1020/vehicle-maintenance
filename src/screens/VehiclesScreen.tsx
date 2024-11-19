// screens/VehiclesScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useVehicles } from '../hooks/useVehicles';

const VehiclesScreen: React.FC = () => {
  const { vehicles, loading, error, getVehicles, removeVehicle } = useVehicles();
  const navigation = useNavigation();

  useEffect(() => {
    getVehicles();
  }, []);

  const handleDeleteVehicle = (id: string) => {
    Alert.alert('Confirm', 'Are you sure you want to delete this vehicle?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: () => removeVehicle(id) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehículos Registrados</Text>

      <Button title="Register Vehicle" onPress={() => navigation.navigate('RegisterVehicle')} />

      {loading && <Text>Cargando...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.vehicleItem}>
            <Text>{`${item.licensePlate} - ${item.make} ${item.model}`}</Text>
            {item.photo && <Image source={{ uri: item.photo }} style={styles.image} />}
            <Button title="Delete" onPress={() => handleDeleteVehicle(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  vehicleItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  error: {
    color: 'red',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default VehiclesScreen;
