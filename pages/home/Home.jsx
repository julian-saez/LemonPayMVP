import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView } from 'react-native';
import Styles from './styles.jsx';
import Header from '../../src/components/header/Header';
import Balance from "../../src/components/balance/Balance";
import OwnCoins from "../../src/components/ownCoins/OwnCoins";
import Movements from "../../src/components/movements/Movements";

const Home = ({walletValue, cryptocurrency}) => {
    return (
        <SafeAreaView>
            <StatusBar 
                animated={true}
                backgroundColor="#031F33"
                hidden={false}
            />
            <ScrollView style={Styles.container}>
                <Header />
                <Balance walletValue={walletValue} />
                <OwnCoins cryptocurrency={cryptocurrency} />
                <Movements />
            </ScrollView>
        </SafeAreaView>
    )
};

export default Home;