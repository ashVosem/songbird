import React, { useState, useEffect } from 'react';
import Audio from '../audioPlayer/Audio';

import errorImg from '../../assets/images/error.jpg';

const BirdTemplate = ({
  birdImage,
  birdName,
  birdAudio,
  birdSpecies,
  isBirdPredicted,
}) => {
  const [err, setErr] = useState(false);
  useEffect(() => {
    return () => setErr(false);
  }, [birdImage, birdName, birdAudio, birdSpecies]);
  return (
    <>
      {err ? (
        <>
          <img className="bird-image" src={errorImg} alt="Bird" />
          <p className="error">Аёй, что-то поломалось...</p>
        </>
      ) : (
        <>
          <img
            onError={() => setErr(true)}
            className="bird-image"
            src={birdImage}
            alt="Bird"
          />
          <div className="bird-content">
            <p className="bird-content--name">{birdName}</p>
            {birdSpecies && (
              <p className="bird-content--species">{birdSpecies}</p>
            )}
            <div className="bird-content--audio"></div>
            <Audio
              setErr={setErr}
              audioUrl={birdAudio}
              isBirdPredicted={isBirdPredicted}
            />
          </div>
        </>
      )}
    </>
  );
};

export default BirdTemplate;
