import {Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');

export default {
  DEVICE_WIDTH: width,
  DEVICE_HEIGHT: height,
  IS_IOS: Platform.OS === 'ios',
  IS_ANDROID: Platform.OS === 'android',
  CLIENT_ID: '9484c8dad9c2f64e1bf6ffeda54ff4d5',
  LICENSE_ID: '12568446',
  REDIRECT_URL: 'https://exalt-courier.netlify.app',
};
