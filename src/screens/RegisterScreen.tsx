import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import DateTimePicker from '@react-native-community/datetimepicker';

const RegisterScreen: React.FC = ({ navigation }) => {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleRegister = async () => {
    const success = await register({ name, email, password, birthdate });
    if (success) {
      navigation.navigate('Login');
    } else {
      alert('Error al registrarse');
    }
  };

  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(Platform.OS === 'ios' ? true : false); // Hide picker for iOS after selection
    setBirthdate(currentDate.toLocaleDateString()); // Format date
  };

  return (
    <View style={styles.container}>
      <Text>Registro</Text>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
      
      <TextInput
        placeholder="Fecha de nacimiento"
        value={birthdate}
        onFocus={() => setShowDatePicker(true)} // Show the date picker when the input is focused
        style={styles.input}
      />

      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}

      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 , justifyContent:'space-around'},
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8 },
});

export default RegisterScreen;
