import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, Title, TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function InfoJogador() {

    const [Nome, setNome] =   useState('Haaland');
    const [Posicao, setPosicao] = useState('Volante');
    const [Pontos, setPontos] = useState(5);
    const [Gols, setGols] = useState(6);
    const [Assistencias, setAssistencias] = useState(7);
    const [Jogos, setJogos] = useState(3);
    const [Vitorias, setVitorias] = useState(6);
    const [Derrotas, setDerrotas] = useState(7);
    const [Empates, setEmpates] = useState(8);

    return (
      <View style={{ backgroundColor: 'white'}}>

        <Card>
          <Card.Cover source={{ uri: 'http://cdn.espn.com.br/image/wide/622_f3a8b14d-4189-481b-8105-744259c38eaa.jpg' }} />
          <Card.Title title={Nome} subtitle={Posicao} />
        </Card>
        
        <View style={{
            flexDirection: 'row',
            height: 100,
            padding: 10,
            justifyContent: 'space-evenly',
            backgroundColor: 'white'
          }}>
            <TextInput 
              style={styles.inputStyle} 
              label={'Pontos'}
              value={''+ Pontos} 
              onChangeText={setPontos} 
              keyboardType='phone-pad'
            />
            <TextInput 
              style={styles.inputStyle} 
              label={'Gols'}
              onChangeText={setGols} 
              value={''+ Gols} 
              keyboardType='phone-pad'
            />
            <TextInput 
              style={styles.inputStyle} 
              label={'Assistências'}
              onChangeText={setAssistencias} 
              value={''+ Assistencias} 
              keyboardType='phone-pad'
            />
        </View>

        <View style={{
            flexDirection: 'row',
            height: 100,
            padding: 10,
            justifyContent: 'space-evenly',
          }}>
            <TextInput 
              style={styles.inputStyle} 
              label={'Jogos'}
              onChangeText={setJogos} 
              value={''+ Jogos} 
              keyboardType='phone-pad'
            />
            <TextInput 
              style={styles.inputStyle} 
              label={'Vitórias'}
              onChangeText={setVitorias} 
              value={''+ Vitorias} 
              keyboardType='phone-pad'
            />
            <TextInput 
              style={styles.inputStyle} 
              label={'Derrotas'}
              onChangeText={setDerrotas} 
              value={''+ Derrotas} 
              keyboardType='phone-pad'
            />
        </View>

        <View style={{
            flexDirection: 'row',
            height: 100,
            padding: 10,
            justifyContent: 'space-evenly',
          }}>
            <TextInput 
              style={styles.inputStyle} 
              label={'Empates'}
              onChangeText={setEmpates} 
              value={''+ Empates} 
              keyboardType='phone-pad'
            />
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: 'white',
    backgroundColor: 'white',
    width: 100,
    height: 75,
    borderWidth: 0,
    borderRadius: 0,
    padding: 0,
  },
  
});
