import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';


const imageUriBackground = { uri: "https://images.unsplash.com/photo-1524455567005-adafed8a3f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" };


export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageUriBackground} resizeMode="cover" style={styles.imageBackground}>

        <Text style={styles.titleText}>Welcome</Text>
        
        <Text style={styles.titleDescriptionText}>to My Daily Horoscope</Text>
        
        <View style={styles.viewButtons}>
          <Button title="Start my journey"
            onPress={() => navigation.navigate('Menu')}
            color='purple'
            style={styles.buttons}
          />
        </View>

      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({

  buttons: {
    marginHorizontal: 120,
  },

  container: {
    flex: 1,
  },

  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },

  titleDescriptionText: {
    color: "pink",
    fontSize: 18,
    paddingBottom: 30,
    textAlign: "center",
  },

  titleText: {
    color: "white",
    fontSize: 42,
    paddingBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },

  viewButtons: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },

})