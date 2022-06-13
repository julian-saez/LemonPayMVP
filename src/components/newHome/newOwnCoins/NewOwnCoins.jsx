import { useContext } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Styles from './styles.jsx';
import Data from '../../../api/data.js';
import { walletContext } from '../../../../contexts/Context.js';

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

const NewOwnCoins = () => {
    const coins = Data[0].coins;
    const { wallet } = useContext(walletContext);
    if(wallet.values){
        return(
            <View style={Styles.container}>
                <Text style={Styles.title}>Tu billetera</Text>
                {
                    coins.map(arr => <Item key={arr.id} obj={arr} marketValue={arr.abr === "BTC" ? wallet.values[0].bitcoin : wallet.values[1].ethereum}  />)
                }
            </View>
        )
    }else{
        return(
            <Text>Cargando...</Text>
        )
    }
};

export default NewOwnCoins;