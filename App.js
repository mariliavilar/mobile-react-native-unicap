import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const hellos = ["Hello World", "Alô Mundo", "Hola Mundo", "Bonjour le monde"];
const language = ["English", "Portuguese", "Spanish", "French", "Reiniciar"];

const imageUriBackground = { uri: "https://cdn.wallpapersafari.com/57/1/e7y3Lh.jpg" };
const imageUriProfile = { uri: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}

export default function App() {
  const [index, setIndex] = useState(0);
  const handlePress = () => (
    setIndex((index+1) % language.length)  
  );
  return (
    <View style={styles.container}>
      <ImageBackground source={imageUriBackground} resizeMode="cover" style={styles.imageBackground}>
        <View style={[styles.imageProfileContainer, { borderColor: 'white', borderWidth:2 }]}>
          <Image source={imageUriProfile} style={styles.imageProfile}/>
        </View>
        <Text style={styles.text}>{hellos[index-1]}</Text>
        <Button stryle={styles.buttons} title={language[index]} onPress={handlePress}/>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  
  buttons: {
  },

  container: {
    flex: 1,
  },

  imageBackground: {
    flex: 1,
    justifyContent: "center"
  },

  imageProfileContainer: {
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

  text: {
    color: 'white',
    alignSelf: 'center'
  }

});
