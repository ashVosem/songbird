import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './redux/store/store';

import HeaderContainer from './components/header/HeaderContainer';
import BirdContainer from './components/bird/BirdContainer';
import BirdInfoContainer from './components/birdInfo/BirdInfoContainer';
import BirdsContainer from './components/birds/BirdsContainer';

import './assets/styles/styles.scss';

import NextLevelContainer from './components/nextLevel/NextLevelContainer';

require('normalize-css');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HeaderContainer />
      <BirdContainer />
      <div className="bird_BirdsInfo_container">
        <BirdsContainer />
        <BirdInfoContainer />
      </div>
      <NextLevelContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
