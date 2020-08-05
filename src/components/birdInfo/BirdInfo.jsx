import React from 'react';
// import birdsData from '../../assets/data/birdsData';

import BirdTemplate from '../bird/BirdTemplate';

const BirdInfo = ({
  clickedBirdName,
  clickedBirdImage,
  clickedBirdAudio,
  clickedBirdSpecies,
  clickedBirdDescription,
  isBirdClicked,
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
              playerId={'audio2'}
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
