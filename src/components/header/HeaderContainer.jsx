import Header from './Header';
import { connect } from 'react-redux';

import {
  updateScoreUp,
  updateScoreDown,
  updateLevel,
} from '../../redux/reducers/scoreReducer';

const mapStateToProps = (state) => {
  return {
    score: state.scoreReducer.score,
    level: state.scoreReducer.level,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateScoreUp: () => {
      dispatch(updateScoreUp());
    },
    updateScoreDown: () => {
      dispatch(updateScoreDown());
    },
    updateLevel: () => {
      dispatch(updateLevel());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
