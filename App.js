import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
//step01 - 'react-navigation' - [App.js]
//  - Importar NavigationContainer e createNativeStackNavigator
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HoroscopeScreen } from './screens/HoroscopeScreen';
import { HomeScreen } from './screens/HomeScreen';

//step02 - 'react-navigation' - [App.js]
//  - Criar uma StackNavigator -> createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* step03 - 'react-navigation' - [App.js]
          - Incluir <NavigationContainer> e <Stack.Navigator> 
          - e colocar as telas para navegação dentro delas */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Horoscope">
          {/* /* step03 - 'react-navigation' - [App.js]
            - Como especificar uma rota? usando o componente Screen
            que recebe como propriedades name e component
            - Aqui, usei a navegação por pilha (Stack) */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Horoscope" component={HoroscopeScreen} options={{ title: 'My Horoscope' }} />
          {/* step04 - 'react-navigation' - [App.js]
              - Extras:
                  - definir initialRouteName no 'Navigator'
                  - add prop 'options' no componente 'Screen' -> para opções específicas para certa(s) tela 
                  - add prop 'screenOptions' no componente 'Navigator' -> para opções gerais em todas telas.*/}
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}