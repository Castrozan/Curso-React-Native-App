import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";

import ListarJogadores from "../../components/ListarJogadores";

export default function HomeScreen() {
  return (
    <PaperProvider>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ListarJogadores
            style={{ borderWidth: 0.5, flex: 2, height: "20%" }}
            image="http://cdn.espn.com.br/image/wide/622_f3a8b14d-4189-481b-8105-744259c38eaa.jpg"
            title="Primeiro colocado"
          >
            <Text>Nome do Jogador</Text>
            <Text>Posição</Text>
          </ListarJogadores>

          <ListarJogadores
            style={{ borderWidth: 0.5, flex: 2 }}
            image="http://cdn.espn.com.br/image/wide/622_f3a8b14d-4189-481b-8105-744259c38eaa.jpg"
            title="Segundo colocado"
          >
            <Text>Nome do Jogador</Text>
            <Text>Posição</Text>
          </ListarJogadores>

          <ListarJogadores
            style={{ borderWidth: 0.5, flex: 2 }}
            image="http://cdn.espn.com.br/image/wide/622_f3a8b14d-4189-481b-8105-744259c38eaa.jpg"
            title="Terceiro colocado"
          >
            <Text>Nome do Jogador</Text>
            <Text>Posição</Text>
          </ListarJogadores>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  bannerstyle: {
    width: 500,
    height: 200,
  },
});
