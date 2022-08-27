import React from 'react';
import StartUp from './src/startUp';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StartUp />
    </Provider>
  );
};

// store.subscribe(() => {
//   console.log('Store Changed', store.getState());
// });

export default App;
