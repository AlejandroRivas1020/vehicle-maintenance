import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const WelcomeScreen: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App</Text>
      <Button title="Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
      <Button title="Registrarse" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default WelcomeScreen;
