import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListarJogadores from "./components/ListarJogadores"
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';

function VisualizarEstatisticas() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 16 }}></Text>
      <Button mode="contained">
        Exportar Estatisticas
      </Button>
    </View>
  );
}

function CadastroJogador() {

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

function InfoJogador() {
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

const JogadoresStack = createNativeStackNavigator();

function JogadoresStackScreen() {
  return (
    <JogadoresStack.Navigator initialRouteName="ListaJogadores">
      <JogadoresStack.Screen name="ListaJogadores" component={ListaJogadores} />
      <JogadoresStack.Screen name="InfoJogador" component={InfoJogador} />
    </JogadoresStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="LoginScreen" component={LoginScreen} />
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="CadastroJogador" component={CadastroJogador} />
          <Tab.Screen name="VisualizarEstatisticas" component={VisualizarEstatisticas} />
          <Tab.Screen name="Lista Jogadores" component={JogadoresStackScreen} />
        </Tab.Navigator>
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