import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';


const imageUriBackground = { uri: "https://cdn.wallpapersafari.com/57/1/e7y3Lh.jpg" };
const imageUriProfile = { uri: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" }


export function ProfileScreen({ navigation }) {

    const changeUserName = () => (
        setUserName(textInputUserName)
    );

    const [textInputUserName, onChangeTextInputUserName] = React.useState(null);
    const [userName, setUserName] = React.useState("Marília Vilar");

    return (
        <View style={styles.container}>
            <ImageBackground source={imageUriBackground} resizeMode="cover" style={styles.imageBackground}>

                <View style={[styles.imageProfileContainer, { borderColor: 'white', borderWidth: 2 }]}>
                    <Image source={imageUriProfile} style={styles.imageProfile} />
                </View>

                <Text style={styles.userName}>{userName}</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTextInputUserName}
                    value={textInputUserName}
                    placeholder="digite para alterar o seu nome"
                />

                <View style={styles.buttons}>
                    <Button style={styles.buttons} title="Salvar" onPress={changeUserName} accessibilityLabel="salvar nome do usuário" />
                </View>

                <StatusBar style="auto" />


                {/* step07 - 'react-navigation' - [MyScreen.js]
            Implementação dos diferentes usos do navigation no fluxo de movimentação entre telas, usando stack: 
            - .navigate("My Screen") -> ir para nova página
            - .goBack() -> retornar a página anterior
            - .popToTop() -> desempilhar todas e retornar a primeira tela*/}
                <View style={styles.bottom}>
                    <View style={styles.viewButtons}>
                        <Button title="Back" onPress={() => navigation.goBack()} color="purple" style={styles.buttons} />
                        <Button title="Home" onPress={() => navigation.popToTop()} color="purple" style={styles.buttons} />
                        <Button title="Horoscope" onPress={() => navigation.navigate('Horoscope')} color="purple" style={styles.buttons} />
                    </View>
                </View>

            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({

    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 62,
    },

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
        marginTop: 120,
        height: 120,
        width: 120,
        borderRadius: 120 / 2,
        overflow: 'hidden',
        alignSelf: 'center',
    },

    imageProfile: {
        height: 120,
        width: 120,
        borderRadius: 120 / 2,
    },

    input: {
        fontSize: 16,
        marginTop: 62,
        marginBottom: 20,
        color: "white",
        alignSelf: "center"
    },

    userName: {
        fontSize: 22,
        fontWeight: "bold",
        alignSelf: "center",
        color: 'darkmagenta',
        marginTop: 12,
    },

    viewButtons: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-around",
    },
});