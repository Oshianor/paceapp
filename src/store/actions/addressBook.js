import {UPDATE_ADDRESS_BOOK} from '../types';

// transaction action
const setAddressBook = (payload) => ({
  type: UPDATE_ADDRESS_BOOK,
  payload,
});


export default {
  setAddressBook,
};