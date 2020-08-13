import React from 'react';

import BirdTemplate from '../bird/BirdTemplate';

const BirdInfo = ({
  clickedBirdName,
  clickedBirdImage,
  clickedBirdAudio,
  clickedBirdSpecies,
  clickedBirdDescription,
  isBirdClicked,
  isBirdPredicted,
  isAudioShouldBeStopped,
}) => {
  return (
    <div className="bird_info">
      {isBirdClicked ? (
        <>
          <div className="bird_info-container">
            <BirdTemplate
              birdName={clickedBirdName}
              birdImage={clickedBirdImage}
              birdAudio={clickedBirdAudio}
              birdSpecies={clickedBirdSpecies}
              isBirdPredicted={isBirdPredicted}
              isAudioShouldBeStopped={isAudioShouldBeStopped}
            />
          </div>
          <p className="bird-content--description">{clickedBirdDescription}</p>
        </>
      ) : (
        <div className="bird-info-placeholder">
          Послушайте плеер. Выберите птицу из списка
        </div>
      )}
    </div>
  );
};

export default BirdInfo;
