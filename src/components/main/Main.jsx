import React from 'react';

import BirdContainer from '../bird/BirdContainer';
import BirdInfoContainer from '../birdInfo/BirdInfoContainer';
import BirdsContainer from '../birds/BirdsContainer';
import NextLevelContainer from '../nextLevel/NextLevelContainer';
import WinNotificationContainer from '../winNotification/WinNotificationContainer';

const Main = ({ isNotificationShouldBeShown }) => {
  return (
    <>
      {!isNotificationShouldBeShown ? (
        <>
          <BirdContainer />
          <div className="bird_BirdsInfo_container">
            <BirdsContainer />
            <BirdInfoContainer />
          </div>
          <NextLevelContainer />
        </>
      ) : (
        <WinNotificationContainer />
      )}
    </>
  );
};
export default Main;
