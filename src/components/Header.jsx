import React from "react";
import Constants from 'expo-constants';
import { Image, Text, View, StyleSheet } from 'react-native';
import Data from '../api/data.js';

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.tagContainer}>
                <Image source={{uri: Data[0].avatarUrl}} style={styles.avatar} />
                <Text style={styles.tag}>${Data[0].lemontag}</Text>
            </View>
        </View>
    )
}

const max_width_tag = '40%';
const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
    },
    tagContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 50,
        marginTop: 25,
        marginLeft: 14,
        maxWidth: max_width_tag,
        backgroundColor: '#ffffff',
        padding: 8,
        elevation: 1,
        shadowColor: '#000000'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight: 8,
    },
    tag: {
        color: '#667898',
        fontSize: 17,
        fontFamily: "Nunito_700Bold",
    }
})

export default Header;