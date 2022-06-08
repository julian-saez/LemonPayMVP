import React from "react";
import { Text, View, FlatList, Image } from 'react-native';
import Styles from './styles.jsx';
import Data from '../../api/data.js';

const CoinIcon = ({iconImg}) => (
    <View style={Styles.coinIcon}>
        <Image style={Styles.iconImg} source={{ uri: iconImg }}  />
    </View>
);

const CoinType = ({type, divise, date}) => (
    <View>
        <Text style={Styles.typeCoinAbr}>{type} de {divise}</Text>
        <Text style={Styles.typeCoin}>{date}</Text>
    </View>
)

const Amount = ({amount, divise}) => {
    return (
        <View style={Styles.amountContainer}>
            <Text style={Styles.amount}>+ {amount} {divise}</Text>
            <Text></Text>
        </View>
    )
}

const Item = ({ obj }) => {
    return (
        <View style={Styles.item}>
            <View style={Styles.typeCoinContainer}>
                <CoinIcon iconImg={obj.iconImg} />
                <CoinType type={obj.type} divise={obj.divise} date={obj.date} />
            </View>
            <Amount amount={obj.amount} divise={obj.divise} />
        </View>
    )
}

const NewMovements = () => {
    const movements = Data[0].movements;
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Últimos movimientos</Text>
            {
                movements.map(arr => <Item key={arr.id} obj={arr} />)
            }
        </View>
    )
}

export default NewMovements;