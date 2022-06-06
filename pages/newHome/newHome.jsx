import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import NewBalance from '../../src/components/newBalance/NewBalance';
import NewHeader from '../../src/components/newHeader/NewHeader';
import NewMovements from '../../src/components/newMovements/NewMovements';
import NewOwnCoins from '../../src/components/newOwnCoins/newOwnCoins';
import Styles from './styles.jsx';

const NewHome = ({walletValue, cryptocurrency}) => {
    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar 
                animated={true}
                backgroundColor="#031F33"
                hidden={false}
            />
            <ScrollView>
                <NewHeader />
                <NewBalance walletValue={walletValue} />
                <NewOwnCoins cryptocurrency={cryptocurrency} />
                <NewMovements />
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewHome;