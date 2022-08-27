import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Navigation from './navigation';
import {colors} from './theme';
import {
  configureFonts,
  DefaultTheme as PaperTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import ccData from './assets/cc.json';
import { accountAction } from "./store/actions"


const StartUp = () => {
  const theme = useSelector(({theme}) => theme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    handleCountry();
  }, []);

  const handleCountry = async () => {
    const cc = [];
    ccData.forEach(element => {
      cc.push({value: element.cc, label: `+${element.cc}`});
    });

    dispatch(accountAction.setCountry({cc, country: ccData}));
  };

  const RNTheme = {
    dark: theme.dark,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary.main,
      background: colors.white,
      card: colors.primary.main,
      text: colors.white,
      border: colors.primary.main,
    },
  };

  const RNPTheme = {
    dark: theme.dark,
    colors: {
      ...PaperTheme.colors,
      primary: colors.primary.main,
      // primary: '#6200ee',
      // accent: '#03dac4',
      // background: theme.dark ? '#000' : 'rgb(255, 255, 255)',
      // surface: theme.dark ? '#131313' : 'white',
      // text: theme.dark ? '#fff' : 'black',
      // error: '#B00020',
    },
    animation: {
      scale: 1.0,
    },
    roundness: 2,
    // fonts: configureFonts(fontConfig),
  };

  return (
    <PaperProvider 
      theme={RNPTheme}
    >
      <NavigationContainer 
      theme={RNTheme}
    >
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default StartUp;
