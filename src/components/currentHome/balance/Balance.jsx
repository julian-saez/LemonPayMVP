import React, { useContext } from "react";
import { Image, Text, View, TouchableHighlight } from 'react-native';
import Styles from './styles.jsx';
import { walletContext } from "../../../../contexts/Context";

const Balance = () => {
    const { wallet } = useContext(walletContext);
    return (
        <View style={Styles.container}>
            <Text style={Styles.sectionTitle}>Balance total</Text>
            <View style={Styles.line}></View>
            <Text style={Styles.money}>

                {/** Esto muestra la cantidad de dinero que hay en la billetera */}

                {
                    wallet.walletValue ? wallet.walletValue.toFixed(2) : 0
                }
                <Text style={Styles.badgeText}> ARS</Text> 
            </Text>
            <View style={Styles.buttonsContainer}>

                {/** Esta es la caja donde están los botones para realizar acciones con el dinero */}

                <TouchableHighlight style={Styles.itemsNav}>
                    <View style={Styles.buttons}>
                        <View style={Styles.iconContainer}>
                            <Image 
                                style={Styles.buttonsIcons} 
                                source={require("../../../../assets/arrow-down.png")} 
                            />
                        </View>
                        <Text style={Styles.buttonsText}>Depositar</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={Styles.buttons}>
                        <View style={Styles.iconContainer}>
                            <Image 
                                style={Styles.buttonsIcons} 
                                source={require("../../../../assets/arrow-up.png")} 
                            />
                        </View>
                        <Text style={Styles.buttonsText}>Enviar</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={Styles.buttons}>
                        <View style={Styles.iconContainer}>
                            <Image 
                                style={Styles.buttonsIcons} 
                                source={require("../../../../assets/peso.png")} 
                            />
                        </View>
                        <Text style={Styles.buttonsText}>Mercado</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={Styles.buttons}>
                        <View style={Styles.iconContainer}>
                            <Image 
                                style={Styles.buttonsIcons} 
                                source={require("../../../../assets/cambiar.png")} 
                            />
                        </View>
                        <Text style={Styles.buttonsText}>Cambiar</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Balance;