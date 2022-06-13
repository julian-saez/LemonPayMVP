import { View, StatusBar, ScrollView } from 'react-native';
import Styles from './styles.jsx';
import Header from '../../src/components/currentHome/header/Header';
import Balance from "../../src/components/currentHome/balance/Balance";
import OwnCoins from "../../src/components/currentHome/ownCoins/OwnCoins";
import Movements from "../../src/components/currentHome/movements/Movements";
import BottomTabBar from '../../src/components/BottomTabBar/BottomTabBar.jsx';

const Home = ({navigation}) => {
    return (
        <>
            <ScrollView>
                <StatusBar 
                    animated={true}
                    backgroundColor="#F4F4FC"
                />
                <View style={Styles.container}>
                    <Header navigation={navigation} />
                    <Balance />
                    <OwnCoins />
                    <Movements />
                </View>
            </ScrollView>
            <BottomTabBar theme={"light"} />
        </>
    )
};

export default Home;