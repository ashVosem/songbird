import React from 'react';

import Play from './Play';
import Pause from './Pause';
import Bar from './Bar';

import useAudioPlayer from './useAudioPlayer';
import { useEffect } from 'react';

const Audio = ({ audioUrl, isAudioShouldBeStopped }) => {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer({ audioUrl });

  useEffect(() => {
    isAudioShouldBeStopped && setPlaying(false);
  }, [isAudioShouldBeStopped, setPlaying]);

  return (
    <div className="player">
      <audio>
        <source src={audioUrl} />
        Something went wrong...
      </audio>

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
