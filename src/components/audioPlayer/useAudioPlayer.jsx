import { useState, useEffect } from 'react';

const useAudioPlayer = ({ audioUrl }) => {
  const [audio, setAudio] = useState(new Audio(audioUrl));
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();

  useEffect(() => {
    setAudio(new Audio(audioUrl));
  }, [audioUrl]);

  useEffect(() => {
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    const setAudioTime = () => setCurTime(audio.currentTime);

    audio.addEventListener('loadeddata', setAudioData);

    audio.addEventListener('timeupdate', setAudioTime);

    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, [audio, clickedTime, curTime, playing]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  };
};

export default useAudioPlayer;
