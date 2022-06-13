import React from "react";
import { View, TouchableHighlight, Image } from 'react-native';
import Styles from './styles.jsx';

const Header = ({ navigation }) => {
    return(
        <View style={Styles.container}>
            <TouchableHighlight underlayColor={"transparent"} style={Styles.buttonLeft} onPress={() => navigation.goBack()}>
                <Image style={Styles.buttonLeft} source={require("../../../../assets/arrow-left.png")} />
            </TouchableHighlight>
        </View>
    )
};

export default Header;