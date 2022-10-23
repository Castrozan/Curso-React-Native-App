import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { getJogadores } from '../../basic-storage/storingData';
import ListarJogadores from "../../components/ListarJogadores"
import { useEffect, useState } from 'react';
export default function ListaJogadores({ navigation }) {
  const [lista, setLista] = useState([])
  useEffect(()=>{
    getJogadores.listar().then(
      (result)=>{setLista(JSON.stringify(result))
        console.log(lista)
      })
  }, [])
    return (
        <View style={{ flex: 1 }}>
            <Text>{lista}</Text>
        </View>
    );
  }
