import React, { useEffect } from "react";
import { View, Text, Image, TouchableHighlight, Alert } from 'react-native';
import Header from "../../../src/components/charge/header/Header";
import Title from "../../../src/components/charge/titles/Title";
import Styles from './styles.jsx';
import data from "../../../src/api/data";

const QRPayment = ({navigation}) => {
    const lemonTag = data[0].lemontag;
    let code = `${lemonTag}${Math.floor(Math.random(100200)*10000000)}`;

    return(
        <View style={Styles.container}>
            <Header navigation={navigation}/>
            <Title title={"Momento de cobrar"} description={"El comprador debe escanear el código QR y continuar con la compra."}/>
            <View style={Styles.centered}>
                <Image style={Styles.qr} source={require("../../../assets/qr.png")} />
            </View>
            <View style={Styles.alternativesContainer}>
                <Text style={Styles.titleAlternatives}>Otras alternativas</Text>
                <View style={Styles.line}></View>
                <Text style={Styles.textDescripting}>Código de compra:  <Text style={Styles.code}>{code}</Text></Text>
                <Text style={Styles.textDescripting}>Si el usuario no se encuentra fisicamente puedes compartirle el siguiente enlace:</Text>
                <View style={Styles.linkBar}>
                    <Text style={Styles.linkText}>lemoncash.pay.com?id=002322&user=$se...</Text>
                    <TouchableHighlight>
                        <Image style={Styles.copyIcon} source={require("../../../assets/copy.png")} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
};

export default QRPayment;