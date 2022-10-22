import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';

export default function CadastroJogador() {
    const [Nome, setNome] =   useState('');
    const [Email, setEmail] =   useState('');
    const [Posicao, setPosicao] =   useState('');

    return (
      <PaperProvider>
        <View style={styles.container}>

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
          <Button style={styles.button} mode="contained">
            Cadastrar Jogador
          </Button>
    
        </View>
      </PaperProvider>
    );
  }

  const styles = StyleSheet.create({
    input: {
      borderBottomWidth: 1,
      height: 40,
      marginBottom: 12,
      fontSize: 16
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      paddingStart: '10%',
      paddingEnd: '10%'
    },

    button: {
      backgroundColor: '#41825f',
      marginStart: '10%',
      marginEnd: '10%',
      marginTop: '5%'
    },
  });