import React, { PureComponent } from 'react'
import { Provider } from 'react-redux';

import Router from './core/router';
import store from './core/store';

const Master = () => {
 
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default Master;
