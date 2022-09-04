import {
  AUTH_TOKEN,
  USER_DATA,
  LOCATION_DATA,
  COUNTRY_DATA,
  CARD_DATA,
  PAYMENT_METHOD,
} from '../types';

const initialstate = {
  token: null,
  user: {
    name: 'Test Text',
    email: 'test@gmail.com',
    occupation: "Dentist",
    countryCode: '234',
    phoneNumber: '8121784611',
    img: null
  },
  country: [],
  cc: null,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case USER_DATA:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case AUTH_TOKEN:
      return Object.assign({}, state, {
        token: action.payload,
      });
    case LOCATION_DATA:
      return Object.assign({}, state, {
        location: action.payload,
      });
    case COUNTRY_DATA:
      return Object.assign({}, state, {
        country: action.payload.country,
        cc: action.payload.cc,
      });
    case CARD_DATA:
      return Object.assign({}, state, {
        cards: action.payload,
      });
    case PAYMENT_METHOD:
      return Object.assign({}, state, {
        ...action.payload,
      });
    default:
      return state;
  }
};
