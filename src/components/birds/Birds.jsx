import React, { useState } from 'react';
import birdsData from '../../assets/data/birdsData';

import winSound from '../../assets/audio/win.mp3';
import errorSound from '../../assets/audio/error.mp3';

const Birds = ({
  RANDOM_SET_OF_BIRDS,
  RANDOM_BIRD,
  showBird,
  updateScore,
  isBirdPredicted,
  showClickedBird,
}) => {
  const [points, setPoints] = useState(birdsData[RANDOM_SET_OF_BIRDS].length);
  const [dotColors, setDotColors] = useState({
    0: 'default',
    1: 'default',
    2: 'default',
    3: 'default',
    4: 'default',
    5: 'default',
  });

  return (
    <div className="birds">
      <ul className="birds-list">
        {birdsData[RANDOM_SET_OF_BIRDS].map((bird, index) => (
          <li
            onClick={() => {
              const win = new Audio(winSound);
              const error = new Audio(errorSound);

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
              console.log(dotColors);
            }}
            className={'birds--list-' + index}
            key={'bird' + index}
          >
            <p>
              <span className={dotColors[index]}></span>
              {RANDOM_BIRD === bird.id - 1 ? bird.name + '+' : bird.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Birds;
