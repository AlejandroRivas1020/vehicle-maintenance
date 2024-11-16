import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MaintenanceHistoryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Mantenimientos</Text>
      {/* Agrega aquí el contenido específico para el historial de mantenimientos */}
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

export default MaintenanceHistoryScreen;
