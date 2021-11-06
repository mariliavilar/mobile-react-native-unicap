import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
//step01 - 'react-query' - [App.js] - Importar QueryClient e QueryClientProvider
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HoroscopeScreen } from './screens/HoroscopeScreen';
import { HomeScreen } from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
//step02 - 'react-query' - [App.js] - Criar um client -> new QueryClient()
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    </QueryClientProvider>
  );
}