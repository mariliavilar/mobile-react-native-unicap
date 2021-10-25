import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Infos } from './components/Infos';
import { PressableOption } from './components/PressableOption';

const imageUriBackground = { uri: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80" };
//const imageUriProfile = { uri: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}

// Create a client
const queryClient = new QueryClient()

export default function App() {

  const searchSign = () => {
    console.log("editSign = ", {editSign});
    // setSign(editSign);
    return (<Infos sign={editSign} urlApi={baseUrl}/>)
  };

  const [day, setDay] = React.useState('today');
  //var sign = "capricorn";
  const [editSign, onChangeSign] = React.useState('capricorn');
  var baseUrl = `https://aztro.sameerkumar.website/?sign=${editSign}&day=${day}`;
  const [sign, setSign] = React.useState(null);

  return (
    //step03 - Provide the client to your App -> around the entire app
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <ImageBackground source={imageUriBackground} resizeMode="cover" style={styles.imageBackground}>

          {/* <Text style={styles.title}>{title}</Text> */}

          {/* <View style={[styles.imageProfileContainer, { borderColor: 'white', borderWidth:2 }]}>
            <Image source={imageUriProfile} style={styles.imageProfile}/>
          </View> */}
  
          <TextInput
            style={styles.input}
            onChangeText={onChangeSign}
            value={editSign}
            placeholder="type your sign"
          />

          <View style={styles.buttons}>
            <Button style={styles.buttons} title="Salvar" onPress={() => {loadHoroscope({editSign, day})}} color="purple" accessibilityLabel="buscar horóscopo pelo nome do signo"/>
          </View>

          {/* <PressableOption sign="capricorn"/> */}
          
          <Button
          title="yesterday"
          onPress={() => setDay("yesterday")}
          />

          <Button
          title="today"
          onPress={() => setDay("today")}
          />

          <Button
          title="tomorrow"
          onPress={() => setDay("tomorrow")}
          />

          <Infos sign={editSign} urlApi={baseUrl}/>

          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </QueryClientProvider>
  );
}

// export const loadHoroscope = ({sign, day}) => {
//   var baseUrl = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
//   console.log("sign = ", {sign}),
//   console.log("urlApi = " , {baseUrl})
//   return (
//     <Infos sign={sign} urlApi={baseUrl}/>
//   );
// };


const styles = StyleSheet.create({
  
  buttons: {
    marginHorizontal: 120
  },

  container: {
    flex: 1,
  },

  horoscope: {
    justifyContent: "center"
  },

  imageBackground: {
    flex: 1,
    justifyContent: "center"
  },

  imageProfileContainer: {
    margin: 12,
    height: 120,
    width: 120,
    borderRadius: 120/2,
    overflow: 'hidden',
    alignSelf: 'center'
  },

  imageProfile: {
    height: 120,
    width: 120,
    borderRadius: 120/2,
  },

  input: {
    fontSize: 16,
    margin: 20,
    color: "white",
    alignSelf: "center"
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center"
  }

});
