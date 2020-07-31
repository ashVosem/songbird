import React from 'react';
import birdsData from '../../assets/data/birdsData';

const Birds = ({ RANDOM_SET_OF_BIRDS, RANDOM_BIRD }) => {
  return (
    <div className="birds">
      <ul className="birds-list">
        {birdsData[RANDOM_SET_OF_BIRDS].map((bird, index) => (
          <li className={'birds--list-' + index} key={'bird' + index}>
            <p>
              <span></span>
              {RANDOM_BIRD === bird.id ? bird.name + '+' : bird.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Birds;
