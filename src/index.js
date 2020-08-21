import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './redux/store/store';

import HeaderContainer from './components/header/HeaderContainer';
import MainContainer from './components/main/MainContainer';

import './assets/styles/styles.scss';

require('normalize-css');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HeaderContainer />
      <MainContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
