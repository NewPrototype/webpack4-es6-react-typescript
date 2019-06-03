import * as React from 'react';
import * as ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/stores';

import App from './App'

ReactDom.render(
  <Provider store={store}>
  <HashRouter>
    <App />
    </HashRouter>
  </Provider >
  ,
  document.getElementById('App')
);



