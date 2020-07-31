import React from 'react';
import Audio from '../audioPlayer/Audio';

const Bird = ({
  birdName,
  birdImage,
  birdAudio,
  RANDOM_SET_OF_BIRDS,
  RANDOM_BIRD,
}) => {
  return (
    <div className="bird">
      <img className="bird-image" src={birdImage} alt="Bird" />
      <div className="bird-content">
        <p className="bird-content--name">{birdName}</p>
        <div className="bird-content--audio"></div>
        <Audio audio={birdAudio} />
      </div>
    </div>
  );
};

export default Bird;
