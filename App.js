import * as React from 'react';
// import { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import CadastroJogador from './src/screen/CadastroJogador';
import VisualizarEstatisticas from './src/screen/VisualizarEstatisticas';
import InfoJogador from './src/screen/InfoJogador';
import ListaJogadores from './src/screen/ListaJogadores';
import Cadastro from './src/screen/Cadastro'

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
          <Tab.Screen name="Cadastro" component={Cadastro} />
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

export default App;