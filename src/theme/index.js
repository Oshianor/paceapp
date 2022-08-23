import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const APP_WIDTH = width;
const APP_HEIGHT = height;

const colors = {
  primary: {
    light: '#C6CADF',
    main: '#015cd8',
    dark: '#015cd8',
  },
  secondary: {
    light: '#FFFFFF',
    main: '#7F7F7F',
    dark: '#7F7F7F',
  },
  intermediate: {
    light: '#FEF3E0',
    main: '#FEF3E0',
    dark: '#A56C0A',
  },
  hr: {
    light: '#00000019',
    main: '#E0E0E0',
    dark: '#333',
  },
  white: '#fff',
  black: '#000000',
  red: '#FF0000',
  green: {
    light: '#D9EED6',
    main: '#1E9B0E',
  },
  grey: {
    light: '#F2F2F2',
    main: '#A2A2A2',
    dark: '#131313',
    new: '#212121',
  },
};

const states = {
  'Federal Capital Territory': 'Abuja Federal Capital Territory',
  'Ìpínlẹ̀ Èkó': 'Lagos',
};

export {colors, states, APP_WIDTH, APP_HEIGHT};
