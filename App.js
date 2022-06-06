import React, { useState, useEffect } from 'react';
import Home from './pages/home/Home.jsx';
import NewHome from './pages/newHome/newHome.jsx';
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import AppLoading from './src/components/AppLoading.jsx';
import Data from './src/api/data.js';

export default function App() {
  const [isNew, setIsNew] = useState(true);
  const [cryptocurrency, setCryptocurrency] = useState([]);
  const [walletValue, setWalletValue] = useState(0);
  const getWalletValue = () => {
    let i = 0;
    let result = 0;
    Data[0].coins.map(el => {
        result += el.amount * cryptocurrency[i] * 200;
        ++i;
    })
    setWalletValue(result.toFixed(2));
  }

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
              setCryptocurrency(arr => [...arr, res.data[0].quote.USD.price, res.data[1].quote.USD.price])
              getWalletValue()
          })
          .catch(err => console.error(err.message))
  }, []);

  const handleNew = () => {
    if(isNew){
      setIsNew(false)
    }else{
      setIsNew(true)
    }
  };

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if(!isNew){
    return <Home walletValue={walletValue} cryptocurrency={cryptocurrency} />
  }else{
    return <NewHome walletValue={walletValue} cryptocurrency={cryptocurrency} />
  } 
};