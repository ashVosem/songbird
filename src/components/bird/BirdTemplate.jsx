import React from 'react';
import Audio from '../audioPlayer/Audio';

const BirdTemplate = ({
  birdImage,
  birdName,
  birdAudio,
  birdSpecies,
  isBirdPredicted,
}) => {
  return (
    <>
      <img className="bird-image" src={birdImage} alt="Bird" />
      <div className="bird-content">
        <p className="bird-content--name">{birdName}</p>
        {birdSpecies && <p className="bird-content--species">{birdSpecies}</p>}
        <div className="bird-content--audio"></div>
        <Audio audioUrl={birdAudio} isBirdPredicted={isBirdPredicted} />
      </div>
    </>
  );
};

export default BirdTemplate;
