import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import ListarJogadores from "../../components/ListarJogadores"

export default function InfoJogador() {
    return (
      <PaperProvider>
        <View style={{ flex: 1 }}>
          <ListarJogadores
              style={{ borderWidth: 0.5, flex: 2 }}
              image="https://placekitten.com/390/240"
              title="Teste do primeiro gatinho"
          >
              <Text>Nome do Jogador</Text>
              <Text>Info do jogardor</Text>
          </ListarJogadores>
            
        </View>
      </PaperProvider>
    );
}
