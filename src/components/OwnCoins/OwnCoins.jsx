import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, SafeAreaView, StyleSheet, TouchableHighlight } from 'react-native';
import Data from '../../api/data.js';

const pesificacion = (amount, marketValue) => marketValue * 200 * amount;

const CoinIcon = ({iconImg}) => (
    <View style={styles.coinIcon}>
        <Image style={styles.iconImg} source={{ uri: iconImg }}  />
    </View>
);

const CoinType = ({name, abr}) => (
    <View>
        <Text style={styles.typeCoinAbr}>{abr}</Text>
        <Text style={styles.typeCoin}>{name}</Text>
    </View>
)

const Amount = ({amount, abr, marketValue}) => {
    const exchange = pesificacion(amount, marketValue)
    console.log(marketValue)
    return (
        <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount} {abr}</Text>
            <Text style={styles.exchange}>{exchange} ARS</Text>
        </View>
    )
}

const Item = ({ name, abr, amount, iconImg, marketValue}) => (
    <View style={styles.item}>
        <View style={styles.typeCoinContainer}>
            <CoinIcon iconImg={iconImg} />
            <CoinType name={name} abr={abr} />
        </View>
        <Amount amount={amount} abr={abr} marketValue={marketValue} />
    </View>
);

const OwnCoins = ({ cryptocurrency }) => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Tus monedas</Text>
            <FlatList
                data={Data[0].coins}
                renderItem={({item}) => (
                    <Item name={item.name} abr={item.abr} amount={item.amount} iconImg={item.iconImg} marketValue={item.abr === "BTC" ? cryptocurrency[0] : cryptocurrency[1]} />
                )}
                keyExtractor={(item) => item.id}  
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 14,
        backgroundColor: "#ffffff",
        borderRadius: 25,
    },
    item: {
        fontSize: 20,
        height: "auto",
        flexGrow: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    title: {
         
        fontSize: 17,
        color: "#667898",
        fontWeight: "500",
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20
    },
    typeCoinContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    coinIcon: {
        width: 35,
        height: 35,
        borderRadius: 100,
        backgroundColor: "#DBE7FF",
        marginRight: 14,
    },
    iconImg: {
        flexGrow: 1,
        borderRadius: 100
    },
    typeCoinAbr: {
        color: "#171A23",
        fontSize: 17,
        fontFamily: "Nunito_700Bold",
    },
    typeCoin: {
        color: "#5F6F8D",
        fontSize: 15,
        fontFamily: "Nunito_500Medium",
    },
    amountContainer: {
        alignItems: "flex-end"
    },
    amount: {
        fontSize: 17,
        fontFamily: "Nunito_700Bold",
    },
    exchange: {
        color: "#5F6F8D",
        fontFamily: "Nunito_500Medium",
    }

})

export default OwnCoins;