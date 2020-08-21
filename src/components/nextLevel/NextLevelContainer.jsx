import NextLevel from './NextLevel';
import { connect } from 'react-redux';

import { scoreSelector } from '../../utils/selectors';
import { birdsSelector } from '../../utils/selectors';

import { updateLevel, resetLevel } from '../../redux/reducers/birdsReducer';
import { showNotification } from '../../redux/reducers/notificationReducer';

const mapStateToProps = (state) => {
  return {
    level: scoreSelector(state).level,
    SET_OF_BIRDS: birdsSelector(state).SET_OF_BIRDS,
    NUMBER_OF_BIRDS: birdsSelector(state).NUMBER_OF_BIRDS,
    isBirdPredicted: birdsSelector(state).isBirdPredicted,
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
    showNotification: () => {
      dispatch(showNotification());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextLevel);
