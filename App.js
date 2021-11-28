import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HoroscopeScreen } from './screens/HoroscopeScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { MenuScreen } from './screens/MenuScreen';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "rosybrown",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontSize: 18,
            },
          }}>

          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
          <Stack.Screen name="Horoscope" component={HoroscopeScreen} options={{ title: 'My Horoscope' }} />        
       
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}