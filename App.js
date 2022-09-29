import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  const [pessoa, setpessoa] = useState({
    nome: "Lucas",
    sobrenome: "Ferreira",
    idade: "34",
    email: "lucas.ferreira@satc.edu.br"
  });

  const [count, setCount] =   useState(0);
  const [lista, setLista] =   useState([]);
  const [text, setText] =   useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text style={{ fontSize: 21, marginBottom: 16 }}>Tela Inicial</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Detalhes')}>
        Ir para Detalhes
      </Button>

      <Button mode="contained" onPress={() => navigation.navigate('ListaJogadores')}>
        Ir para Lista de Jogadores
      </Button>

      <Text style={{ fontSize: 21, marginBottom: 3 }}>Você clicou {count}</Text>
      <Button mode="contained" onPress={() => setCount(count + 1)}>
          Contar
      </Button>

    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 21, marginBottom: 16 }}>
        Outra tela, agora detalhes.
      </Text>
      <Button mode="contained" onPress={() => navigation.goBack()}>
        Voltar
      </Button>
    </View>
  );
}

function ListaJogadores({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 21, marginBottom: 16 }}>
        Tela de lista de jogadores
      </Text>
      <Button mode="contained" onPress={() => navigation.goBack()}>
        Voltar
      </Button>
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
          <Stack.Screen name="Detalhes" component={DetailsScreen} />
          <Stack.Screen name="ListaJogadores" component={ListaJogadores} />
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