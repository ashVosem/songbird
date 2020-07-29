import React from 'react';
import birdsGroups from '../../assets/data/birdsGroups';

const Header = ({ score, level, updateScoreUp, updateScoreDown }) => {
  return (
    <div className="header">
      <div className="top">
        <p>Songbird</p>
        <p>score: {score}</p>
      </div>
      <button onClick={updateScoreUp}>Click Me Up!</button>
      <button onClick={updateScoreDown}>Click Me Down!</button>
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
