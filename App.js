import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';


const imageUriBackground = { uri: "https://cdn.wallpapersafari.com/57/1/e7y3Lh.jpg" };
const imageUriProfile = { uri: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"}

export default function App() {

  const changeTitle = () => (
    setTitle(userName)
  );

  const [userName, onChangeUserName] = React.useState(null);
  const [title, setTitle] = React.useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground source={imageUriBackground} resizeMode="cover" style={styles.imageBackground}>

        <Text style={styles.title}>{title}</Text>

        <View style={[styles.imageProfileContainer, { borderColor: 'white', borderWidth:2 }]}>
          <Image source={imageUriProfile} style={styles.imageProfile}/>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={onChangeUserName}
          value={userName}
          placeholder="digite para alterar o seu nome"
        />

        <View style={styles.buttons}>
          <Button style={styles.buttons} title="Salvar" onPress={changeTitle} color="purple" accessibilityLabel="salvar nome do usuário"/>
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  
  buttons: {
    marginHorizontal: 120
  },

  container: {
    flex: 1,
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
