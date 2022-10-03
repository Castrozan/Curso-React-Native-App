import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';

export default function HomeScreen() {
    return (
        <PaperProvider> 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
          <Text style={{ fontSize: 21, marginBottom: 16 }}></Text>
          <Button mode="contained" /*onPress={() => navigation.navigate('VisualizarEstatisticas')}*/>
            Ir para Visualizar Estatisticas
          </Button>
    
          <Text style={{ marginBottom: 16 }}></Text>
          <Button mode="contained" /*onPress={() => navigation.navigate('ListaJogadores')}*/>
            Ir para Lista de Jogadores
          </Button>
    
          <Text style={{ marginBottom: 16 }}></Text>
          <Button mode="contained" /*onPress={() => navigation.navigate('CadastroJogador')}*/>
            Ir para o Cadastro de Jogador
          </Button>
    
        </View>
      </PaperProvider>
    );
  }