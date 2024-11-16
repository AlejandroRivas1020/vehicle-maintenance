import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterVehicleScreen from '../screens/RegisterVehicleScreen';
import CreateMaintenanceScreen from '../screens/CreateMaintenanceScreen';
import MaintenanceHistoryScreen from '../screens/MaintenanceHistoryScreen';
import VehiclesScreen from '../screens/VehiclesScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Vehicles" component={VehiclesScreen} />
    <Stack.Screen name="RegisterVehicle" component={RegisterVehicleScreen} />
    <Stack.Screen name="CreateMaintenance" component={CreateMaintenanceScreen} />
    <Stack.Screen name="MaintenanceHistory" component={MaintenanceHistoryScreen} />
  </Stack.Navigator>
);

export default AppNavigator;

