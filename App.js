import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Infos } from './components/Infos';
import { PressableOption } from './components/PressableOption';
import {Picker} from '@react-native-picker/picker';

const imageUriBackground = { uri: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80" };
const imageUriSign = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Capricorn.svg/1200px-Capricorn.svg.png"}


// Create a client
const queryClient = new QueryClient()

export default function App() {

  const searchSign = () => {
    console.log("editSign = ", {editSign});
    // setSign(editSign);
    return (<Infos sign={editSign} urlApi={baseUrl}/>)
  };

  //const [day, setDay] = React.useState('today');
  //var sign = "capricorn";
  //const [editSign, onChangeSign] = React.useState('capricorn');
  const [selectedDay, setSelectedDay] = useState("today");
  console.log("selectedDay = ", selectedDay);
  const [sign, setSign] = React.useState("capricorn");
  const [baseUrl, setBaseUrl] = React.useState(`https://aztro.sameerkumar.website/?sign=${sign}&day=${selectedDay}`);

  //const [page, setPage] = useState(1);
  
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
    //step03 - Provide the client to your App -> around the entire app
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <ImageBackground source={imageUriBackground} resizeMode="cover" style={styles.imageBackground}>

          {/* <Text style={styles.title}>{title}</Text> */}

          <View style={[styles.imageSignContainer, { borderColor: 'white', borderWidth:0.3 }]}>
            <Image source={imageUriSign} style={styles.imageSign}/>
          </View>
  
          {/* <TextInput
            style={styles.input}
            onChangeText={onChangeSign}
            value={editSign}
            placeholder="type your sign"
          />

          <View style={styles.buttons}>
            <Button style={styles.buttons} title="Salvar" onPress={() => {loadHoroscope({editSign, day})}} color="purple" accessibilityLabel="buscar horóscopo pelo nome do signo"/>
          </View> */}

          {/* <PressableOption sign="capricorn"/> */}
          
          {/* <Button title="yesterday" onPress={() => setDay("yesterday")}/>
          <Button title="today" onPress={() => setDay("today")}/>
          <Button title="tomorrow" onPress={() => setDay("tomorrow")}/> */}

          {/* <Picker
            selectedValue={selectedDay}
            onValueChange={(itemValue, itemIndex) =>
              // setSelectedDay(itemValue),
              setBaseUrl(`https://aztro.sameerkumar.website/?sign=${sign}&day=${itemValue}`)
            }
            style={styles.picker}>
            <Picker.Item label="Yesterday" value="yesterday" />
            <Picker.Item label="Today" value="today" />
            <Picker.Item label="Tomorrow" value="tomorrow" />
          </Picker> */}

          {/* <Infos sign={sign} day={selectedDay} urlApi={baseUrl}/> */}
          <Infos sign={sign} day={selectedDay} urlApi={`https://aztro.sameerkumar.website/`}/>
          
          <View style={styles.viewButtons}>
          {/* <Button title="Anterior" onPress={handleAnteriorPress} />
          <Button title="Próxima" onPress={handleProximaPress} /> */}
            <Button title="yesterday" onPress={handleYesterdayPress} color="purple" style={styles.buttons}/>
            <Button title="today" onPress={handlerTodayPress} color="purple" style={styles.buttons}/>
            <Button title="tomorrow" onPress={handlerTomorrowPress} color="purple" style={styles.buttons}/>
          </View>

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
    marginHorizontal: 120,
    color: "purple",
    backgroundColor: "purple",
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

  imageSignContainer: {
    margin: 12,
    height: 90,
    width: 90,
    borderRadius: 120/2,
    overflow: 'hidden',
    alignSelf: 'center',
    backgroundColor: "transparent"
  },

  imageSign: {
    height: 90,
    width: 90,
    borderRadius: 120/2,
    tintColor: "pink",
  },

  input: {
    fontSize: 16,
    margin: 20,
    color: "white",
    alignSelf: "center"
  },
  picker: {
    color: "white",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center"
  },
  viewButtons: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
