import React, { useState, useCallback } from 'react';
import birdsData from '../../assets/data/birdsData';

import setDotColorsClassesObj from '../../utils/helpers/setDotColorsClassesObj';

import winSound from '../../assets/audio/win.mp3';
import errorSound from '../../assets/audio/error.mp3';
import { useEffect } from 'react';

const Birds = ({
  SET_OF_BIRDS,
  RANDOM_BIRD,
  NUMBER_OF_BIRDS,
  showBird,
  updateScore,
  isBirdPredicted,
  isBirdClicked,
  showClickedBird,
}) => {
  console.log('a');
  const dotColorClasses = setDotColorsClassesObj(NUMBER_OF_BIRDS);

  const [win] = useState(new Audio(winSound));
  const [error] = useState(new Audio(errorSound));

  const [points, setPoints] = useState(birdsData[SET_OF_BIRDS].length - 1);
  const [dotColors, setDotColors] = useState(dotColorClasses);

  const clickActionCallback = useCallback(
    (index) => {
      showClickedBird(index);
      if (!isBirdPredicted) {
        setPoints(points > 0 ? points - 1 : 0);
        if (RANDOM_BIRD === index) {
          showBird();
          updateScore(points);
          setDotColors({ ...dotColors, [index]: 'predicted' });
          win.play();
        } else {
          setDotColors({ ...dotColors, [index]: 'not_predicted' });
          error.play();
        }
      }
    },
    [
      RANDOM_BIRD,
      dotColors,
      error,
      isBirdPredicted,
      points,
      showBird,
      showClickedBird,
      updateScore,
      win,
    ]
  );

  useEffect(() => {
    if (!isBirdClicked) {
      setDotColors(dotColorClasses);
      setPoints(birdsData[SET_OF_BIRDS].length - 1);
    }
    // eslint-disable-next-line
  }, [isBirdClicked]);

  return (
    <div className="birds">
      <ul className="birds-list">
        {birdsData[SET_OF_BIRDS].map((bird, index) => (
          <li
            onClick={() => {
              clickActionCallback(index);
            }}
            className={'birds--list-' + index}
            key={'bird' + index}
          >
            <p>
              <span className={dotColors[index]}></span>
              {bird.name}
              {RANDOM_BIRD === bird.id - 1 &&
                console.log('answer:' + bird.name)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Birds;
