import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.description}>Please, choose any option:</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title=" View Vehicles"
          onPress={() => navigation.navigate('Vehicles')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Register Vehicles"
          onPress={() => navigation.navigate('RegisterVehicle')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Create Maintenance"
          onPress={() => navigation.navigate('CreateMaintenance')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="MaintenanceHistory"
          onPress={() => navigation.navigate('MaintenanceHistory')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    width:'100%',
    padding: 20,
    justifyContent: 'center',
    gap:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width:'30%',
  },
  description:{
    fontSize:24,
  },
});

export default HomeScreen;
