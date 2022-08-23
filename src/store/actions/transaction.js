import {TRANSACTION_HISTORY} from '../types';

// transaction action
const setHistory = (payload) => ({
  type: TRANSACTION_HISTORY,
  payload,
});


export default {
  setHistory,
};