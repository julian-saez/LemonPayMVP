import React, { useState, useEffect } from 'react';
import { walletContext } from "./contexts/Context";
import AppLoading from './src/components/AppLoading.jsx';
import Home from './routers/home/Home.jsx';
import NewHome from './routers/newHome/newHome.jsx';
import Data from './src/api/data.js';

import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [wallet, setWallet] = useState({});
  useEffect(() => {
      const URI = 'pro-api.coinmarketcap.com';
      fetch(`https://${URI}/v1/cryptocurrency/listings/latest`, {
          method: "GET",
          headers: {
              "X-CMC_PRO_API_KEY": '52b76bc6-1a54-428c-8692-63030d371579'
          },
      })
          .then(res => res.json())
          .then(res => {
              setWallet({
                ...wallet, 
                walletValue: res.data[0].quote.USD.price * Data[0].coins[1].amount * 200 + res.data[1].quote.USD.price * Data[0].coins[2].amount * 200,
                values: [
                  {
                    bitcoin: res.data[0].quote.USD.price 
                  },
                  {
                    ethereum: res.data[1].quote.USD.price
                  }
                ]
              })
          })
          .catch(err => console.error(err.message))
  }, []);

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
    return (
      <walletContext.Provider value={{wallet, setWallet}}>
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false,
                  }}
                >
                  <Stack.Screen
                    name="Home"
                    component={Home}
                  />
                  <Stack.Screen 
                    name='LemonPay'
                    component={NewHome}
                  />
                </Stack.Navigator>
            </NavigationContainer>
      </walletContext.Provider>
    )
  }
};