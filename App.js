import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const hellos = ["Hello World", "Alô Mundo", "Hola Mundo", "Bonjour le monde"];
const language = ["English", "Portuguese", "Spanish", "French", "Reiniciar"];

export default function App() {
  const [index, setIndex] = useState(0);
  const handlePress = () => (
    setIndex((index+1) % language.length)  
  );
  return (
    <View style={styles.container}>
      <Text>{hellos[index-1]}</Text>
      <Button title={language[index]} onPress={handlePress}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
