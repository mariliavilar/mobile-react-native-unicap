import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HoroscopeScreen } from './screens/HoroscopeScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { MenuScreen } from './screens/MenuScreen';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient()

const imageHeader = { uri: "https://purewows3.imgix.net/images/articles/2018_06/Main-Horoscope-Header_Web.gif?auto=format,compress&cs=strip" };


{/* Header com customização: */ }
{/* MODE 3A - 'header-customization - [App.js] */ }
{/* Header pode ser substituido por um componente completamente customizado, que pode conter texto, imagens, incluido gifs (android)​ */ }
{/* -> renderizar numa funcao fora, e chamar depois*/ }
function MyCustomHeaderView() {
  return (
    <View style={{ alignItems: 'center', flexDirection: "row", justifyContent: 'space-around' }}>
      <Text style={{ color: 'white', marginRight: 10}}>
          ***
      </Text>
      <ImageBackground
        style={{ width: 200, height: 56 }}
        source={imageHeader}
      />
      <Text style={{ color: 'white', marginLeft: 10}}>
          ***
      </Text>
    </View>


  );
}



export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {/* Header sem customização: */}
        {/* <Stack.Navigator initialRouteName="Home"> */}

        {/* Header com customização: */}
        {/* MODE 2 - 'header-customization - [App.js] */}
        {/* customizando o header de todas as páginas em conjuntos*/}
        {/* -> Personalização no Stack.Navigator -> "screenOptions" */}
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

          {/* Header da Home sem customização: */}
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}

          {/* Header com customização: */}
          {/* MODE 1 - 'header-customization - [App.js] */}
          {/* customizando o header de uma página em específico */}
          {/* -> Personalização no Stack.Screen da tela desejada -> "options"*/}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: {
                backgroundColor: "silver",
              },
              headerTintColor: "purple",
              headerTitleStyle: {
                fontSize: 18,
              },
              headerTitleAlign: "center"
            }} />

          <Stack.Screen name="Horoscope" component={HoroscopeScreen} options={{ title: 'My Horoscope' }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />

          {/* <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menu' }} /> */}

          {/* Header com customização: */}
          {/* MODE 3B - 'header-customization - [App.js] */}
          {/* Replacing the title with a custom component​ */}
          {/* -> renderizar numa funcao fora, e chamar depois*/}
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{
              headerTitle: (props) => <MyCustomHeaderView {...props} />,
              headerStyle: {
                backgroundColor: "darksalmon",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}