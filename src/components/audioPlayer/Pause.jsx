import React from 'react';

export default ({ handleClick }) => {
  return (
    <button className="player__button" onClick={() => handleClick()}>
      <svg viewBox="0 0 47.607 47.607">
        <path
          fill="#00bc8c"
          d="M17.991 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345zM42.877 40.976a6.631 6.631 0 01-13.262 0V6.631a6.631 6.631 0 0113.262 0v34.345z"
        ></path>
      </svg>
    </button>
  );
};
