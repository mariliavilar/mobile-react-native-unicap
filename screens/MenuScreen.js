import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';


const imageUriBackground = { uri: "https://images.unsplash.com/photo-1597567175782-1e5771f7f313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" };


export function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageUriBackground} resizeMode="cover" style={styles.imageBackground}>

        <Text style={styles.titleText}>My Daily Horoscope</Text>

        <Pressable onPress={() => navigation.navigate('Horoscope')} style={styles.buttons}>
          <Text style={styles.textButtons}>My Horoscope</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Profile')} style={styles.buttons}>
          <Text style={styles.textButtons}>My Profile</Text>
        </Pressable>

      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({

  buttons: {
    margin: 22,
    backgroundColor: 'cadetblue',
    marginHorizontal: 32,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 6,
  },

  container: {
    flex: 1,
  },

  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },

  textButtons: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  titleText: {
    color: "white",
    fontSize: 32,
    marginBottom: 120,
    fontWeight: "bold",
    textAlign: "center",
  },

})