import Header from './Header';
import { connect } from 'react-redux';

import { scoreSelector } from '../../utils/selectors';

import { updateScore, updateLevel } from '../../redux/reducers/scoreReducer';

const mapStateToProps = (state) => {
  return {
    score: scoreSelector(state).score,
    level: scoreSelector(state).level,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateScore: () => {
      dispatch(updateScore());
    },

    updateLevel: () => {
      dispatch(updateLevel());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
