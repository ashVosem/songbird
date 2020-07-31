import React from 'react';
import birdsGroups from '../../assets/data/birdsGroups';

const Header = ({ score, level, updateScoreUp, updateScoreDown }) => {
  return (
    <div className="header">
      <div className="top">
        <div className="songbird"></div>
        <p className="score">Score: {score}</p>
      </div>
      <ul className="bottom">
        {birdsGroups.map((group, index) =>
          index !== 0 ? (
            <li className={'level_' + index} key={'level-' + index}>
              <p>{group}</p>
            </li>
          ) : (
            <li className={'active level_' + index} key={'level-' + index}>
              <p>{group}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Header;
