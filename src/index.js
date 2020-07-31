import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './redux/store/store';

import HeaderContainer from './components/header/HeaderContainer';
import BirdContainer from './components/bird/BirdContainer';
import BirdsContainer from './components/birds/BirdsContainer';

import './assets/styles/styles.scss';

require('normalize-css');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HeaderContainer />
      <BirdContainer />
      <BirdsContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
