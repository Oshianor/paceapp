import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Navigation from './navigation';
// import {colors} from './theme';


const StartUp = () => {
  // const RNTheme = {
  //   dark: theme.dark,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     primary: colors.primary.main,
  //     background: colors.white,
  //     card: colors.primary.main,
  //     text: colors.white,
  //     border: colors.primary.main,
  //   },
  // };

  return (
    <NavigationContainer 
    // theme={RNTheme}
    >
      <Navigation />
    </NavigationContainer>
  );
};

export default StartUp;
