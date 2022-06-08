import { View, StatusBar, ScrollView } from 'react-native';
import Styles from './styles.jsx';
import Header from '../../src/components/header/Header';
import Balance from "../../src/components/balance/Balance";
import OwnCoins from "../../src/components/ownCoins/OwnCoins";
import Movements from "../../src/components/movements/Movements";

const Home = ({navigation}) => {
    return (
        <ScrollView>
            <StatusBar 
                animated={true}
                backgroundColor="#031F33"
            />
            <View style={Styles.container}>
                <Header navigation={navigation} />
                <Balance />
                <OwnCoins />
                <Movements />
            </View>
        </ScrollView>
    )
};

export default Home;