import React from 'react';
import { View, Text, Image } from 'react-native';
import Styles from './styles.jsx';

const BottomTabBar = ({theme}) => {
    return(
        <View style={theme === "dark" ? [Styles.container, Styles.darkBackground] : [Styles.container, Styles.lightBackground]}>
            <View style={Styles.tabButton}>
                <Image style={Styles.tabIcon} source={require("../../../assets/inicio-icon.png")} />
                <Text style={[Styles.text, Styles.selected]}>Inicio</Text>
            </View>
            <View style={Styles.tabButton}>
                <Image style={Styles.tabIcon} source={theme === "dark" ? require("../../../assets/mercado-icon.png") : require("../../../assets/mercado-icon-light.png")} />
                <Text style={theme === "dark" ? [Styles.text, Styles.darkText] : [Styles.text, Styles.lightText]}>Mercado</Text>
            </View>
            <View style={Styles.tabButton}>
                <Image style={Styles.tabIcon} source={theme === "dark" ? require("../../../assets/dinero-icon.png") : require("../../../assets/dinero-icon-light.png")} />
                <Text style={theme === "dark" ? [Styles.text, Styles.darkText] : [Styles.text, Styles.lightText]}>Dinero</Text>
            </View>
            <View style={Styles.tabButton}>
                <Image style={Styles.tabIcon} source={theme === "dark" ? require("../../../assets/tarjeta-icon.png") : require("../../../assets/tarjeta-icon-light.png")} />
                <Text style={theme === "dark" ? [Styles.text, Styles.darkText] : [Styles.text, Styles.lightText]}>Tarjeta</Text>
            </View>
        </View>
    );
};

export default BottomTabBar;