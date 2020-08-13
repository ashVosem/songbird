import NextLevel from './NextLevel';
import { connect } from 'react-redux';

import { scoreSelector } from '../../utils/selectors';
import { birdsSelector } from '../../utils/selectors';

import { updateLevel, pauseAudio } from '../../redux/reducers/birdsReducer';
import { resetLevel } from '../../redux/reducers/birdsReducer';

const mapStateToProps = (state) => {
  return {
    level: scoreSelector(state).level,
    SET_OF_BIRDS: birdsSelector(state).SET_OF_BIRDS,
    NUMBER_OF_BIRDS: birdsSelector(state).NUMBER_OF_BIRDS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLevel: () => {
      dispatch(updateLevel());
    },
    resetLevel: () => {
      dispatch(resetLevel());
    },
    pauseAudio: () => {
      dispatch(pauseAudio());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextLevel);
