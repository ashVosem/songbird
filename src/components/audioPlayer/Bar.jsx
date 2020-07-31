import React from 'react';
import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import momentDurationFormatSetup from 'moment-duration-format';

export default ({ duration, curTime, onTimeUpdate }) => {
  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration) {
    return moment
      .duration(duration, 'seconds')
      .format('mm:ss', { trim: false });
  }

  function calcClickedTime(e) {
    const clickPositionInPage = e.pageX;
    const bar = document.querySelector('.bar__progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  }

  return (
    <div className="bar">
      <div
        className="bar__progress"
        style={{
          background: `linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) ${curPercentage}%, rgb(115, 115, 115) ${curPercentage}%, rgb(115, 115, 115) 100%)`,
        }}
        onMouseDown={(e) => handleTimeDrag(e)}
      >
        <span
          className="bar__progress__knob"
          style={{ left: `${curPercentage - 1}%` }}
        />
      </div>
      <div className="timers">
        <span className="bar__time">{formatDuration(curTime)}</span>
        <span className="bar__time">{formatDuration(duration)}</span>
      </div>
    </div>
  );
};
