import React from "react";
import { Image, Text, View, TouchableHighlight } from 'react-native';
import Data from '../../api/data.js';
import Styles from './styles.jsx';

const Header = ({navigation}) => {
    return(
        <View style={Styles.container}>
            <View style={Styles.tagContainer}>
                <Image source={{uri: Data[0].avatarUrl}} style={Styles.avatar} />
                <Text style={Styles.tag}>${Data[0].lemontag}</Text>
            </View>
            <TouchableHighlight style={Styles.buttonContainer} onPress={() =>{
                navigation.navigate('LemonPay')
            }}>
                <View style={Styles.lemonPayContainer}>
                    <Image style={Styles.lemonPayIcon} source={{uri: "https://i.postimg.cc/t4yR13J1/lemon-icon.png"}} />
                    <Text style={Styles.lemonPayButton}>New</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Header;