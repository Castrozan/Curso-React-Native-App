import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';
import CadastroJogador from '../screen/CadastroJogador';
import VisualizarEstatisticas from '../screen/VisualizarEstatisticas';
import Cadastro from '../screen/Cadastro'

import StackRoutes from './stack.routes'

const { Screen, Navigator } = createBottomTabNavigator();

export function BottomRoutes(){
    return(
        <Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }} >
            <Screen name="Cadastro" component={Cadastro} />
            <Screen name="LoginScreen" component={LoginScreen} />
            <Screen name="HomeScreen" component={HomeScreen} />
            <Screen name="CadastroJogador" component={CadastroJogador} />
            <Screen name="VisualizarEstatisticas" component={VisualizarEstatisticas} />
            <Screen name="Lista Jogadores" component={StackRoutes} />
        </Navigator>
    )
}

