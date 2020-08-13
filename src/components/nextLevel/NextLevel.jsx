import React from 'react';

const NextLevel = ({
  SET_OF_BIRDS,
  NUMBER_OF_BIRDS,
  updateLevel,
  resetLevel,
  pauseAudio,
}) => {
  return (
    <>
      <button
        className="next-level"
        onClick={() => {
          SET_OF_BIRDS >= NUMBER_OF_BIRDS - 1 ? resetLevel() : updateLevel();
        }}
      >
        Next Level
      </button>
    </>
  );
};

export default NextLevel;
