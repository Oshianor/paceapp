import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import account from './reducers/account';
import theme from './reducers/theme';
import feedback from './reducers/feedback';

// // import thunk from 'redux-thunk';
// import appReducer from './reducers';

// export default createStore(appReducer, applyMiddleware(thunk));

export const store = configureStore({
  reducer: {
    account,
    theme,
    feedback,
  },
});
