import Birds from './Birds';
import { connect } from 'react-redux';

import { birdsSelector } from '../../utils/selectors';
import { updateBird } from '../../redux/reducers/birdsReducer';
import { updateScore } from '../../redux/reducers/scoreReducer';

const mapStateToProps = (state) => {
  return {
    RANDOM_SET_OF_BIRDS: birdsSelector(state).RANDOM_SET_OF_BIRDS,
    RANDOM_BIRD: birdsSelector(state).RANDOM_BIRD,
    isBirdPredicted: birdsSelector(state).isBirdPredicted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBird: () => {
      dispatch(updateBird());
    },
    updateScore: (points) => {
      dispatch(updateScore(points));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Birds);
