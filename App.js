import React, { useState, useEffect } from 'react';
import Home from './pages/home/Home.jsx';
import * as Font from 'expo-font';
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

let customFonts = {
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-medium': require('./assets/fonts/Nunito-Medium.ttf'),
  'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  'nunito-extrabold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
};


export default function App() {
  let isAuth = true; {/** Sistema de seguridad infalible */}
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // useEffect(() => {
  //   if(!fontsLoaded) {
  //     loadFonts()
  //   }
  // })

  let [fontsUseLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  // const loadFonts = async () => {
  //   await Font.loadAsync(customFonts);

  //   setFontsLoaded(true)
  // }

  if(isAuth){
    return <Home />
  }
};