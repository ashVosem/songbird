import React from 'react';
import HeaderContainer from './components/header/HeaderContainer';
import BirdContainer from './components/bird/BirdContainer';

import './assets/styles/styles.scss';

require('normalize-css');

const App = () => {
  return (
    <>
      <HeaderContainer />
      <BirdContainer />
    </>
  );
};

export default App;
