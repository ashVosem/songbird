import React from 'react';
import birdsData from '../../assets/data/birdsData';

const Birds = ({
  RANDOM_SET_OF_BIRDS,
  RANDOM_BIRD,
  updateBird,
  updateScore,
  isBirdPredicted,
}) => {
  let points = birdsData[RANDOM_SET_OF_BIRDS].length;
  return (
    <div className="birds">
      <ul className="birds-list">
        {birdsData[RANDOM_SET_OF_BIRDS].map((bird, index) => (
          <li
            onClick={() => {
              if (!isBirdPredicted) {
                points -= 1;
                if (RANDOM_BIRD === index) {
                  updateBird();
                  updateScore(points);
                  points = 0;
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
