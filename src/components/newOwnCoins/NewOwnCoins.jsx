import { View, Text, Image, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Styles from './styles.jsx';
import Data from '../../api/data.js';

const pesification = (amount, marketValue) => marketValue * 200 * amount;

const CoinIcon = ({iconImg}) => (
    <View style={Styles.coinIcon}>
        <Image style={Styles.iconImg} source={{ uri: iconImg }}  />
    </View>
);

const CoinType = ({name, abr}) => (
    <View>
        <Text style={Styles.typeCoinAbr}>{abr}</Text>
        <Text style={Styles.typeCoin}>{name}</Text>
    </View>
)

const Amount = ({amount, abr, marketValue}) => {
    const exchange = pesification(amount, marketValue).toFixed(2);
    return (
        <View style={Styles.amountContainer}>
            <Text style={Styles.amount}>{amount} {abr}</Text>
            <Text style={Styles.exchange}>{exchange} ARS</Text>
        </View>
    )
}

const Item = ({ obj, marketValue }) => (
    <View style={Styles.item}>
        <View style={Styles.typeCoinContainer}>
            <CoinIcon iconImg={obj.iconImg} />
            <CoinType name={obj.name} abr={obj.abr} />
        </View>
        <Amount amount={obj.amount} abr={obj.abr} marketValue={marketValue} />
    </View>
);

const NewOwnCoins = ({ cryptocurrency }) => {
    const COINS = Data[0].coins;
    return(
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.title}>Tus monedas</Text>
            <FlatList
                data={COINS}
                renderItem={({item}) => (
                    <Item obj={item} marketValue={item.abr === "BTC" ? cryptocurrency[0] : cryptocurrency[1]}  />
                )}
                keyExtractor={item => item.id}  
            />
        </SafeAreaView>
    )
};

export default NewOwnCoins;