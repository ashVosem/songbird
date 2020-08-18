import React from 'react';

const NextLevel = ({
  SET_OF_BIRDS,
  NUMBER_OF_BIRDS,
  updateLevel,
  resetLevel,
  isBirdPredicted,
}) => {
  return (
    <>
      <button
        disabled={!isBirdPredicted}
        className={isBirdPredicted ? 'next-level' : 'next-level disabled'}
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
