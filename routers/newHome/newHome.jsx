import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import NewBalance from '../../src/components/newBalance/NewBalance';
import NewHeader from '../../src/components/newHeader/NewHeader';
import NewMovements from '../../src/components/newMovements/NewMovements';
import NewOwnCoins from '../../src/components/newOwnCoins/NewOwnCoins';
import Styles from './styles.jsx';

const NewHome = ({navigation}) => {
    return (
        <SafeAreaView style={Styles.container}>
            <StatusBar 
                animated={true}
                backgroundColor="#031F33"
                hidden={false}
            />
            <ScrollView>
                <NewHeader navigation={navigation} />
                <NewBalance />
                <NewOwnCoins />
                <NewMovements />
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewHome;