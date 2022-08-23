import {
  AUTH_TOKEN,
  USER_DATA,
  LOCATION_DATA,
  COUNTRY_DATA,
  CARD_DATA,
  PAYMENT_METHOD
} from '../types';

const initialstate = {
  token: null,
  user: null,
  cards: [],
  cashPaymentType: 'pickup', // if it's a cash payment and what type it is. PICKUP // DELIVERY
  paymentMethod: 'cash',
  card: null,
  location: {
    address: '1600 Charleston Rd, Mountain View, CA 94043, USA',
    coords: {
      latitude: 37.4219983,
      longitude: -122.084,
    },
  },
  country: [],
  cc: [],
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
        ...action.payload
      });
    default:
      return state;
  }
};
