import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import BottomTabBar from '../../src/components/BottomTabBar/BottomTabBar';
import NewBalance from '../../src/components/newHome/newBalance/NewBalance';
import NewHeader from '../../src/components/newHome/newHeader/NewHeader';
import NewMovements from '../../src/components/newHome/newMovements/NewMovements';
import NewOwnCoins from '../../src/components/newHome/newOwnCoins/NewOwnCoins';
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
                <NewBalance navigation={navigation} />
                <NewOwnCoins />
                <NewMovements />
            </ScrollView>
            <BottomTabBar theme={"dark"} />
        </SafeAreaView>
    )
}

export default NewHome;