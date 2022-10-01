import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

export default function CadastroJogador() {

    const [Nome, setNome] =   useState('');
    const [Email, setEmail] =   useState('');
    const [Posicao, setPosicao] =   useState('');
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={{ fontSize: 14 }}>Nome: </Text>
        <TextInput
          style={styles.input}
          setFormData={Nome}
          value={setNome.Nome}
        />
  
        <Text style={{ fontSize: 14 }}>Email: </Text>
        <TextInput
          style={styles.input}
          setFormData={Email}
          value={setEmail.Email}
        />
  
  
        <Text style={{ fontSize: 14 }}>Posicao: </Text>
        <TextInput
          style={styles.input}
          setFormData={Posicao}
          value={setPosicao.Posicao}
        />
  
        <Text style={{ fontSize: 21, marginBottom: 16 }}></Text>
        <Button mode="contained">
          Cadastrar Jogaydor
        </Button>
  
      </View>
    );
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });