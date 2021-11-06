import React from 'react';
import { Button, Text, View } from 'react-native';

// step05 - 'react-navigation' - [MyScreen.js]
/* tenho que pegar minha prop 'navigation' 
a prop 'navigation' já é passada por padrão para cada componente da tela no stack navigation nativo
(react navigation injeta automaticamente em todos os componentes que estão dentro dele essa prop 'navigation'
como esta minha tela HomeScreen está no App.js dentro do Navigation, ela possui por padrão essa prop 'navigation' que eu posso acessar daqui
*/ 
export function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="See my horoscope"
        // step06 - 'react-navigation' - [MyScreen.js]
        // chamar a função 'navigate' (na propriedade de 'navigation') com o nome da rota de destino (de acordo com o 'name' definido no App.js)
        // o navigate vai colocar essa nova tela no topo da pilha
        onPress={() => navigation.navigate('Horoscope')}
      />
    </View>
  );
}