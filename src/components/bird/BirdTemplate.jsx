import React from 'react';
import Audio from '../audioPlayer/Audio';

const BirdTemplate = ({ birdImage, birdName, birdAudio, birdSpecies }) => {
  return (
    <>
      <img className="bird-image" src={birdImage} alt="Bird" />
      <div className="bird-content">
        <p className="bird-content--name">{birdName}</p>
        <div className="bird-content--audio"></div>
        <Audio audio={birdAudio} />
        {birdSpecies && <p className="bird-content--species">{birdSpecies}</p>}
      </div>
    </>
  );
};

export default BirdTemplate;
