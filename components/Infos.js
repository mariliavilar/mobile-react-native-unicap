import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View, Text } from "react-native";
import { useQuery } from 'react-query'; 

import { loadItems } from "../api";


export const Infos = ({sign, urlApi}) => {
    console.log("urlApi =", urlApi);

    const { isLoading, error, data } = useQuery('itens', loadItems(urlApi));
    console.log("data", data);

    // const [titleText, setTitleText] = useState("Capricórnio");
  
    // const onPressTitle = () => {
    //   setTitleText("Bird's Nest [pressed]");
    // };

    if (isLoading) {
        return  <ActivityIndicator size="large" color="pink" />;
    }

    if (error || data?.detail === "Not found") {
        return (
            <View>
                <Text>Erro: {error || "Not Found"}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{sign}</Text>
            <Text style={styles.titleDescriptionText}>{data.date_range}</Text>
            <Text style={styles.subtitleText}>Horoscope on {data.current_date}</Text>
            <Text style={styles.information}>Lucky number: {data.lucky_number}</Text>
            <Text style={styles.information}>Color: {data.color}</Text>
            <Text style={styles.information}>Mood: {data.mood}</Text>
            <Text style={styles.description}>{data.description}</Text>
        </View>
     );
};

const styles = StyleSheet.create({
    container: {
        color: "white",
        paddingHorizontal: 40,
        paddingVertical: 20,
    },
    description: {
        backgroundColor: "pink",
        color: "brown",
        marginTop: 20,
        paddingHorizontal: 40,
        paddingVertical: 30,
    },
    information: {
        color: "white",
        margin: 10,
        fontSize: 16,
    },
    subtitleText: {
        color: "grey",
        fontSize: 16,
        paddingBottom: 10,
    },
    titleDescriptionText: {
        color: "pink",
        fontSize: 10,
        paddingBottom: 30,
        textAlign: "center",
    },
    titleText : {
        color: "white",
        fontSize: 20,
        paddingBottom: 10,
        fontWeight: "bold",
        textAlign: "center",
    },
});