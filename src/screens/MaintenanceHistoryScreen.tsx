import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MaintenanceHistoryScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maintenance History</Text>
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
