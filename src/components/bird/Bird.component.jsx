import React from 'react';

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
      </div>
    </div>
  );
};

export default Bird;
