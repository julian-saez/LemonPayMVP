import React, { useState } from 'react';
import { View } from 'react-native';
import Amount from '../../../src/components/charge/amount/Amount';
import ButtonRadiantered from '../../../src/components/charge/button/Button';
import Converter from '../../../src/components/charge/converter/Converter';
import BackgroundSvg from '../../../src/components/charge/svgBackground/BackgroundSvg';
import Header from '../../../src/components/charge/header/Header';
import Title from '../../../src/components/charge/titles/Title';
import Styles from './styles.jsx';
import IconChange from '../../../src/components/charge/iconChange/ChangeIcon';

const Charge = ({navigation}) => {
    const [amount, setAmount] = useState(0);
    const handleAmount = num => setAmount(num);
    return(
        <View style={Styles.container}>
            <View style={Styles.box}> 
                <Header navigation={navigation} />
                <Title title="Cobrá en criptos" description={""} />
                <Amount handleAmount={handleAmount} />
                <IconChange />
                <Converter amount={amount} />
                <ButtonRadiantered textContent={"Continuar"} navigation={navigation} keyView={"QRPaymentView"} />
            </View>
            <BackgroundSvg />
        </View>
    )
}

export default Charge;