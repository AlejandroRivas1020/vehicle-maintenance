import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateMaintenanceScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Mantenimiento</Text>
      {/* Agrega aquí el contenido específico para crear mantenimientos */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CreateMaintenanceScreen;
