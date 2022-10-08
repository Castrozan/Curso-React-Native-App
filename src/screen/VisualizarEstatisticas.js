import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';

export default function VisualizarEstatisticas() {
    return (
      <PaperProvider>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ marginBottom: 16 }}></Text>
          <Button mode="contained">
            Exportar Estatisticas
          </Button>
        </View>
      </PaperProvider>
    );
  }
