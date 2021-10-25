import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Infos } from './Infos';

export const PressableOption = ({sign, day}) => {

  
  var baseUrl = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;

  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          // return (
          //   <View style={styles.logBox}>
          //     <Infos sign={sign} urlApi={baseUrl}/> 
          //   </View>
          // );

          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>{sign}</Text>
        )}
      </Pressable>
      {/* <View style={styles.logBox}>
      <Infos sign={sign} urlApi={baseUrl}
          style={styles.horoscope}/> 
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});