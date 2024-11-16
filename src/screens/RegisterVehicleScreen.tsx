import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useVehicles } from '../hooks/useVehicles';

const RegisterVehicleScreen: React.FC = () => {
  const { addVehicle } = useVehicles();

  const [licensePlate, setLicensePlate] = useState('');
  const [size, setSize] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  const handleAddVehicle = () => {
    if (!licensePlate || !size || !year || !make || !model) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    addVehicle({ licensePlate, size, year, make, model });
    setLicensePlate('');
    setSize('');
    setYear('');
    setMake('');
    setModel('');
    Alert.alert('Éxito', 'Vehículo agregado correctamente');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Vehículo</Text>

      <TextInput
        style={styles.input}
        placeholder="Placa"
        value={licensePlate}
        onChangeText={setLicensePlate}
      />
      <TextInput style={styles.input} placeholder="Tamaño" value={size} onChangeText={setSize} />
      <TextInput style={styles.input} placeholder="Año" value={year} onChangeText={setYear} />
      <TextInput style={styles.input} placeholder="Marca" value={make} onChangeText={setMake} />
      <TextInput style={styles.input} placeholder="Modelo" value={model} onChangeText={setModel} />
      <Button title="Agregar Vehículo" onPress={handleAddVehicle} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default RegisterVehicleScreen;
