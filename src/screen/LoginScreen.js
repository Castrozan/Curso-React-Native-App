import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

export default function LoginScreen({ navigation }) {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite um email..." style={styles.input}/>

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder="Digite sua senha..." style={styles.input}/>

        <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('HomeScreen')}>
          Entrar
      </Button>

        <Button style={styles.buttonRegistrar}>
          <Text style={styles.textRegistrar}>Não possui uma conta? Registre-se</Text>
        </Button>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: '10%',
    paddingEnd: '10%'
  },
  
  title: {
    fontSize: 20,
    marginTop: 30,
    color: '#585959'
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  
  button: {
    backgroundColor: '#41825f',
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: '5%'
  },

  textRegistrar: {
    color: '#424345' 
  }
  
})