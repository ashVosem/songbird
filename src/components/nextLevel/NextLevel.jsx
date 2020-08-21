import React from 'react';
import { useCallback } from 'react';

const NextLevel = ({
  SET_OF_BIRDS,
  NUMBER_OF_BIRDS,
  updateLevel,
  resetLevel,
  isBirdPredicted,
  showNotification,
}) => {
  const gameSetCallback = useCallback(() => {
    resetLevel();
    showNotification();
  }, [resetLevel, showNotification]);

  return (
    <>
      <button
        disabled={!isBirdPredicted}
        className={isBirdPredicted ? 'next-level' : 'next-level disabled'}
        onClick={() => {
          SET_OF_BIRDS >= NUMBER_OF_BIRDS - 1
            ? gameSetCallback()
            : updateLevel();
        }}
      >
        Next Level
      </button>
    </>
  );
};
export default NextLevel;
