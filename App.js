import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListarJogadores from "./components/ListarJogadores"

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text style={{ fontSize: 21, marginBottom: 16 }}></Text>
      <Button mode="contained" onPress={() => navigation.navigate('VisualizarEstatisticas')}>
        Ir para Visualizar Estatisticas
      </Button>

      <Text style={{ marginBottom: 16 }}></Text>
      <Button mode="contained" onPress={() => navigation.navigate('ListaJogadores')}>
        Ir para Lista de Jogadores
      </Button>

      <Text style={{ marginBottom: 16 }}></Text>
      <Button mode="contained" onPress={() => navigation.navigate('CadastroJogador')}>
        Ir para o Cadastro de Jogador
      </Button>

    </View>
  );
}

function VisualizarEstatisticas({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 16 }}></Text>
      <Button mode="contained">
        Exportar Estatisticas
      </Button>
    </View>
  );
}

function InfoJogador({ navigation }) {
  return (
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
  );
}

function CadastroJogador({ navigation }) {

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

function ListaJogadores({ navigation }) {
  return (
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
          <Text>Info do jogardor</Text>
        </ListarJogadores>

        <ListarJogadores
          style={{ borderWidth: 0.5, flex: 2 }}
          image="https://placekitten.com/390/240"
          title="Teste do primeiro gatinho"
          buttonLabel="Informações do Jogador"
          buttonPress={() => navigation.navigate('InfoJogador')}
        >
          <Text>Nome do Jogador</Text>
          <Text>Info do jogardor</Text>
        </ListarJogadores>

        <ListarJogadores
          style={{ borderWidth: 0.5, flex: 2 }}
          image="https://placekitten.com/390/240"
          title="Teste do primeiro gatinho"
          buttonLabel="Informações do Jogador"
          buttonPress={() => navigation.navigate('InfoJogador')}
        >
          <Text>Nome do Jogador</Text>
          <Text>Info do jogardor</Text>
        </ListarJogadores>

        <ListarJogadores
          style={{ borderWidth: 0.5, flex: 2 }}
          image="https://placekitten.com/390/240"
          title="Teste do primeiro gatinho"
          buttonLabel="Informações do Jogador"
          buttonPress={() => navigation.navigate('InfoJogador')}
        >
          <Text>Nome do Jogador</Text>
          <Text>Info do jogardor</Text>
        </ListarJogadores>

      </ScrollView>  
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="VisualizarEstatisticas" component={VisualizarEstatisticas} />
          <Stack.Screen name="ListaJogadores" component={ListaJogadores} />
          <Stack.Screen name="InfoJogador" component={InfoJogador} />
          <Stack.Screen name="CadastroJogador" component={CadastroJogador} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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

export default App;