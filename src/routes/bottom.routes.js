import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/LoginScreen";
import CadastroJogador from "../screen/CadastroJogador";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cadastro from  '../screen/Cadastro';

import StackRoutes from "./stack.routes";

const { Screen, Navigator } = createBottomTabNavigator();

export function BottomRoutes() {
  return (
    <Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="LoginScreen" 
        component={LoginScreen} 
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Screen name="Cadastro" 
        component={Cadastro}
        options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="text-box-plus-outline" color={color} size={26} />
          ),
        }} 
      />
      <Screen name="HomeScreen" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} 
      />
      <Screen name="CadastroJogador" 
        component={CadastroJogador}
        options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="text-box-plus-outline" color={color} size={26} />
          ),
        }} 
      />
      <Screen name="ListaJogadoresStack" 
        component={StackRoutes}
        options={{
          tabBarLabel: 'Lista',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="text-box-outline" color={color} size={26} />
          ),
        }}  
      />
    </Navigator>
  );
}
