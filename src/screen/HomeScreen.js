import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';

export default function HomeScreen() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
        <Text style={{ fontSize: 21, marginBottom: 16 }}></Text>
        <Button mode="contained" /*onPress={() => navigation.navigate('VisualizarEstatisticas')}*/>
          Ir para Visualizar Estatisticas
        </Button>
  
        <Text style={{ marginBottom: 16 }}></Text>
        <Button mode="contained">
          Ir para Lista de Jogadores
        </Button>
  
        <Text style={{ marginBottom: 16 }}></Text>
        <Button mode="contained">
          Ir para o Cadastro de Jogador
        </Button>
  
      </View>
    );
  }