import {
  USER_DATA,
  AUTH_TOKEN,
  LOCATION_DATA,
  COUNTRY_DATA,
  CARD_DATA,
  PAYMENT_METHOD,
} from '../types';

// user data action
const setUserData = (payload) => ({
  type: USER_DATA,
  payload,
});

// auth token action
const setToken = (payload) => ({
  type: AUTH_TOKEN,
  payload,
});

// auth token action
const setLocation = (payload) => ({
  type: LOCATION_DATA,
  payload,
});

// auth token action
const setCountry = (payload) => ({
  type: COUNTRY_DATA,
  payload,
});

const setCards = (payload) => ({
  type: CARD_DATA,
  payload,
});

const setPaymentMethod = (payload) => ({
  type: PAYMENT_METHOD,
  payload,
});


export default {
  setUserData,
  setToken,
  setLocation,
  setCountry,
  setCards,
  setPaymentMethod,
};
