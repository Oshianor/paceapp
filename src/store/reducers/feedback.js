import {LAUNCH_FEEDBACK, DISMISS_FEEDBACK} from '../types';

const initialstate = {
  open: false,
  severity: '',
  msg: '',
  loading: false,
  retryAction: null,
  failed: false,
  onRequestClose: null,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case LAUNCH_FEEDBACK:
      return Object.assign({}, state, {
        ...action.payload,
      });
    case DISMISS_FEEDBACK:
      return Object.assign({}, state, {
        ...initialstate,
      });
    default:
      return state;
  }
};