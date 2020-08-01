import React from 'react';
// import birdsData from '../../assets/data/birdsData';
import Audio from '../audioPlayer/Audio';

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
            <img className="bird-image" src={birdImage} alt="Bird" />
            <div className="bird-content">
              <p className="bird-content--name">{birdName}</p>
              <div className="bird-content--audio"></div>
              <p className="bird-content--species">{birdSpecies}</p>
              <Audio audio={birdAudio} />
            </div>
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
