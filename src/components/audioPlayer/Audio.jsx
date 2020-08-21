import React from 'react';

import Play from './Play';
import Pause from './Pause';
import Bar from './Bar';

import useAudioPlayer from './useAudioPlayer';
import { useEffect } from 'react';

const Audio = ({ setErr, audioUrl, isBirdPredicted }) => {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    audio,
  } = useAudioPlayer({ setErr, audioUrl });

  useEffect(() => {
    isBirdPredicted && setPlaying(false);

    return () => {
      setPlaying(false);

      audio.pause();
    };
  }, [audio, isBirdPredicted, setErr, setPlaying]);

  return (
    <div className="player">
      <div className="controls">
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
    </div>
  );
};

export default Audio;
