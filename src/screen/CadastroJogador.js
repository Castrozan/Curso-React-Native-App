import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { jogador } from '../../basic-storage/storingData';
export default function CadastroJogador() {
    const [Nome, setNome] =   useState('');
    const [Posicao, setPosicao] =   useState('');

    return (
      <PaperProvider>
        <View style={styles.container}>

          <Text style={{ fontSize: 14 }}>Nome: </Text>
          <TextInput
            style={styles.input}
            value={Nome}
            onChangeText={setNome}
          />
          <Text style={{ fontSize: 14 }}>Posicao: </Text>
          <TextInput
            style={styles.input}
            value={Posicao}
            onChangeText={setPosicao}
          />
    
          <Text style={{ fontSize: 21, marginBottom: 16 }}></Text>
          <Button style={styles.button} mode="contained" onPress={()=>jogador(Nome, Posicao)}>
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