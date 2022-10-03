import { createNativeStackNavigator } from '@react-navigation/native-stack'

import InfoJogador from '../screen/InfoJogador';
import ListaJogadores from '../screen/ListaJogadores';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Lista Jogadores" component={ListaJogadores} />
            <Screen name="InfoJogador" component={InfoJogador} />
        </Navigator>
    )
}

