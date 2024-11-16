import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const WelcomeScreen: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Belatrix</Text>
      <Text style={styles.description}>Vehicle Maintenance</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Register" onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection:'column', justifyContent: 'center', alignItems: 'center', height:'100%', width:'100%', padding:10, gap: 20},
  buttonContainer:{flexDirection:'row', width:'100%',justifyContent:'space-around', margin:10, padding:10},
  title: { fontSize: 35, fontWeight: 'bold', padding:5 },
  description:{ justifyContent:'center', alignItems:'center'},

});

export default WelcomeScreen;
