import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import ListarJogadores from "../../components/ListarJogadores"

export default function ListaJogadores({ navigation }) {
    return (
      <PaperProvider>
        <View style={{ flex: 1 }}>
          <ScrollView>
    
            <ListarJogadores
              style={{ borderWidth: 0.5, flex: 2 }}
              image="https://placekitten.com/390/240"
              title="Teste do primeiro gatinho"
              buttonLabel="Informações do Jogador"
              buttonPress={() => navigation.navigate('InfoJogador')}
            >
              <Text>Nome do Jogador</Text>
              <Text>Info do jogador</Text>
            </ListarJogadores>
    
            <ListarJogadores
              style={{ borderWidth: 0.5, flex: 2 }}
              image="https://placekitten.com/390/240"
              title="Teste do primeiro gatinho"
              buttonLabel="Informações do Jogador"
              buttonPress={() => navigation.navigate('InfoJogador')}
            >
              <Text>Nome do Jogador</Text>
              <Text>Info do jogador</Text>
            </ListarJogadores>

            <ListarJogadores
              style={{ borderWidth: 0.5, flex: 2 }}
              image="https://placekitten.com/390/240"
              title="Teste do primeiro gatinho"
              buttonLabel="Informações do Jogador"
              buttonPress={() => navigation.navigate('InfoJogador')}
            >
              <Text>Nome do Jogador</Text>
              <Text>Info do jogador</Text>
            </ListarJogadores>
    
          </ScrollView>  
        </View>
      </PaperProvider>
    );
  }
