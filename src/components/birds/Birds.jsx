import React, { useState } from 'react';
import birdsData from '../../assets/data/birdsData';

const Birds = ({
  RANDOM_SET_OF_BIRDS,
  RANDOM_BIRD,
  showBird,
  updateScore,
  isBirdPredicted,
  isBirdClicked,
  showClickedBird,
}) => {
  // let points = birdsData[RANDOM_SET_OF_BIRDS].length;
  const [points, setPoints] = useState(birdsData[RANDOM_SET_OF_BIRDS].length);
  const [clickedBird, setClickedBird] = useState(null);

  return (
    <div className="birds">
      <ul className="birds-list">
        {birdsData[RANDOM_SET_OF_BIRDS].map((bird, index) => (
          <li
            onClick={() => {
              showClickedBird(index);
              setClickedBird(index);
              if (!isBirdPredicted) {
                setPoints(points > 0 ? points - 1 : 0);
                if (RANDOM_BIRD === index) {
                  showBird();
                  updateScore(points);
                }
              }
            }}
            className={'birds--list-' + index}
            key={'bird' + index}
          >
            <p>
              <span></span>
              {RANDOM_BIRD === bird.id - 1 ? bird.name + '+' : bird.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Birds;
