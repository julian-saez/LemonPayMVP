import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, ListViewBase } from 'react-native';
import Header from '../../src/components/Header.jsx';
import Balance from "../../src/components/Balance/Balance.jsx";
import OwnCoins from "../../src/components/OwnCoins/OwnCoins.jsx";


const Home = () => {
    const [cryptocurrency, setCryptocurrency] = useState([]);
    useEffect(() => {
        const URI = 'pro-api.coinmarketcap.com';
        fetch(`https://${URI}/v1/cryptocurrency/listings/latest`, {
            method: "GET",
            headers: {
                "X-CMC_PRO_API_KEY": '52b76bc6-1a54-428c-8692-63030d371579'
            },
        })
            .then(res => res.json())
            .then(res => setCryptocurrency(arr => [...arr, res.data[0].quote.USD.price, res.data[1].quote.USD.price]))
            .catch(err => console.error(err.message))
    }, []);
    return (
        <View style={styles.container}>
            <Header />
            <Balance cryptocurrency={cryptocurrency} />
            <OwnCoins cryptocurrency={cryptocurrency} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F4F4FC',
    },
    item: {
        backgroundColor: "#467CDE",
        height: 200,
        width: 200,
    }
})

export default Home;