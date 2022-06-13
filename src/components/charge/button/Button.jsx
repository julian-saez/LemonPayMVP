import React from "react";
import { View, TouchableHighlight, Text, StyleSheet } from "react-native";

const ButtonRadiantered = ({ textContent, navigation, keyView }) => {
    const nextPage = () => navigation.navigate(keyView)
    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.button} activeOpacity={0.85} underlayColor="#031F33" onPress={nextPage}>
                <Text style={styles.text}>{textContent}</Text>
            </TouchableHighlight>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: "100%",
        alignItems: "center",
        zIndex: 2,
        elevation: 3
    },
    button: {
        backgroundColor: "#ffffff",
        width: "100%",
        maxWidth: "85%",
        paddingVertical: 20,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "auto",
        elevation: 2,
        shadowColor: "#000000"
    },
    text: {
        color: "#031F33",
        fontSize: 18,
        fontFamily: "Nunito_700Bold"
    }
});

export default ButtonRadiantered;