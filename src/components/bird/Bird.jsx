import React from 'react';
import BirdTemplate from './BirdTemplate';

const Bird = ({ birdName, birdImage, birdAudio, isBirdPredicted }) => {
  return (
    <>
      {isBirdPredicted ? (
        <BirdTemplate
          birdName={birdName}
          birdImage={birdImage}
          birdAudio={birdAudio}
        />
      ) : (
        <BirdTemplate
          birdName={'******'}
          birdImage={
            'https://cdn.wallpaperhi.com/1280x1024/20120224/black%20white%20birds%20silhouette%201280x1024%20wallpaper_www.wallpaperhi.com_10.jpg'
          }
          birdAudio={birdAudio}
        />
      )}
    </>
  );
};

export default Bird;
