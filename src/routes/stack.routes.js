import { createNativeStackNavigator } from '@react-navigation/native-stack'

import InfoJogador from '../screen/InfoJogador';
import ListaJogadores from '../screen/ListaJogadores';

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Navigator>
            <Screen name="ListaJogadores" component={ListaJogadores} />
            <Screen name="InfoJogador" component={InfoJogador} />
        </Navigator>
    )
}

