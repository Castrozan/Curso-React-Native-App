import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import ListarJogadores from "../../components/ListarJogadores"

export default function InfoJogador() {
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
