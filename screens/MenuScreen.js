import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';


const imageUriBackground = { uri: "https://images.unsplash.com/photo-1597567175782-1e5771f7f313?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" };


// step05 - 'react-navigation' - [MyScreen.js]
/* tenho que pegar minha prop 'navigation' 
a prop 'navigation' já é passada por padrão para cada componente da tela no stack navigation nativo
(react navigation injeta automaticamente em todos os componentes que estão dentro dele essa prop 'navigation'
como esta minha tela HomeScreen está no App.js dentro do Navigation, ela possui por padrão essa prop 'navigation' que eu posso acessar daqui
*/
export function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageUriBackground} resizeMode="cover" style={styles.imageBackground}>

        <Text style={styles.titleText}>My Daily Horoscope</Text>


        {/* step06 - 'react-navigation' - [MyScreen.js]
            chamar a função 'navigate' (na propriedade de 'navigation') com o nome da rota de destino (de acordo com o 'name' definido no App.js)
            navigate vai colocar essa nova tela no topo da pilha */}
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