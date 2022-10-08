import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import EditarJogador from "../../components/EditarJogador"

export default function InfoJogador() {

    const [Gols, setGols] =   useState(0);
    const [Passes, setPasses] = useState(0);
    const [Faltas, setFaltas] = useState(0);

    return (
      <View style={{ flex: 1 }}>
        <EditarJogador
            style={{ borderWidth: 0.5, flex: 2 }}
            image="https://placekitten.com/390/240"
            title="Teste do primeiro gatinho"
            mode="contained"
            buttonLabel="Gols"
            buttonPress={() => setGols(Gols + 1)}
        >
            <Text>Nome do Jogador</Text>
            <Text>Info do jogardor</Text>
            <Text>Gols: { Gols }</Text>
            <Text>Gols: { Passes }</Text>
            <Text>Gols: { Faltas }</Text>
        </EditarJogador>
          
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingStart: '10%',
    paddingEnd: '10%'
  },
  
  title: {
    fontSize: 20,
    marginTop: 30,
    color: '#585959'
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },
  
  button: {
    backgroundColor: '#41825f',
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: '5%'
  },

  textRegistrar: {
    color: '#424345' 
  },

  tinyLogo: {
    marginLeft: 80,
    width: 150,
    height: 150,
  }
  
})