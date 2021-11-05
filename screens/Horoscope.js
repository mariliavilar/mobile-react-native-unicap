import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, View } from 'react-native';

import { Infos } from '../components/Infos';


const imageUriBackground = { uri: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80" };
const imageUriSign = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Capricorn.svg/1200px-Capricorn.svg.png"}


export function Horoscope() {

  const [selectedDay, setSelectedDay] = useState("today");
  const [sign, setSign] = React.useState("capricorn");

  const handleYesterdayPress = () => {
    setSelectedDay("yesterday");
  };
  const handlerTodayPress = () => {
    setSelectedDay("today");
  };
  const handlerTomorrowPress = () => {
    setSelectedDay("tomorrow");
  };

  return (
    //step03 - 'react-query' - [App.js] - Provide the client to your App -> put around the app
   
      <View style={styles.container}>
        <ImageBackground source={imageUriBackground} resizeMode="cover" style={styles.imageBackground}>

          <View style={[styles.imageSignContainer, { borderColor: 'white', borderWidth:0.3 }]}>
            <Image source={imageUriSign} style={styles.imageSign}/>
          </View>

          <Infos sign={sign} day={selectedDay} baseUrlApi={`https://aztro.sameerkumar.website/`}/>
          
          <View style={styles.viewButtons}>
            <Button title="yesterday" onPress={handleYesterdayPress} color="purple" style={styles.buttons}/>
            <Button title="today" onPress={handlerTodayPress} color="purple" style={styles.buttons}/>
            <Button title="tomorrow" onPress={handlerTomorrowPress} color="purple" style={styles.buttons}/>
          </View>

          <StatusBar style="auto" />
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
    justifyContent: "center"
  },

  imageSign: {
    height: 90,
    width: 90,
    borderRadius: 90/2,
    tintColor: "pink",
  },

  imageSignContainer: {
    margin: 12,
    height: 90,
    width: 90,
    borderRadius: 90/2,
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: "transparent"
  },
  
  viewButtons: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});