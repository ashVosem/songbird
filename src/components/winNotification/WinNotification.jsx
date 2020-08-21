import React, { useEffect } from 'react';
import absolutelyWinSound from '../../assets/audio/gta.mp3';

const absolutelyWin = new Audio(absolutelyWinSound);

const WinNotification = ({ hideNotification, score }) => {
  useEffect(() => {
    score === 30 && absolutelyWin.play();
    return () => absolutelyWin.pause();
  }, [score]);

  return (
    <div className="notification">
      {score !== 0 && score !== 30 ? (
        <>
          <h1>Поздравляем!</h1>
          <p>Ты прошёл викторину и набрал {score} из 30 возможных баллов</p>
        </>
      ) : score === 30 ? (
        <>
          <img
            src="https://cdn140.picsart.com/290406318033211.png?type=webp&to=min&r=240"
            alt="absolutely_win"
          />
          <p>Ты набрал максимум баллов!</p>
        </>
      ) : (
        <>
          <h1>А говорят, 0 даже случайно не натыкать...</h1>
        </>
      )}

      <button onClick={() => hideNotification()}>Попробовать ещё раз!</button>
    </div>
  );
};

export default WinNotification;
