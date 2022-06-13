import React from "react";
import { View, Image } from 'react-native';
import Styles from './styles.jsx';

const IconChange = () => {
    return(
        <View style={Styles.container}>
            <View style={Styles.iconContainer}>
                <Image style={Styles.iconImg} source={require("../../../../assets/Change2.png")} />
            </View>
        </View>
    )
}

export default IconChange;