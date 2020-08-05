import React from 'react';
// import birdsData from '../../assets/data/birdsData';

import BirdTemplate from '../bird/BirdTemplate';

const BirdInfo = ({
  birdName,
  birdImage,
  birdAudio,
  birdSpecies,
  birdDescription,
  isBirdPredicted,
}) => {
  return (
    <div className="bird_info">
      {isBirdPredicted ? (
        <>
          <div className="bird_info-container">
            <BirdTemplate
              birdName={birdName}
              birdImage={birdImage}
              birdAudio={birdAudio}
              birdSpecies={birdSpecies}
              playerId={'audio2'}
            />
          </div>
          <p className="bird-content--description">{birdDescription}</p>
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
