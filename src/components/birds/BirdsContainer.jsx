import Birds from './Birds';
import { connect } from 'react-redux';

import { birdsSelector } from '../../utils/selectors';
import {
  showBird,
  showClickedBird,
  pauseAudio,
} from '../../redux/reducers/birdsReducer';
import { updateScore } from '../../redux/reducers/scoreReducer';

const mapStateToProps = (state) => {
  return {
    SET_OF_BIRDS: birdsSelector(state).SET_OF_BIRDS,
    RANDOM_BIRD: birdsSelector(state).RANDOM_BIRD,
    isBirdPredicted: birdsSelector(state).isBirdPredicted,
    isBirdClicked: birdsSelector(state).isBirdClicked,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showBird: () => {
      dispatch(showBird());
    },
    showClickedBird: (bird) => {
      dispatch(showClickedBird(bird));
    },
    updateScore: (points) => {
      dispatch(updateScore(points));
    },
    pauseAudio: () => {
      dispatch(pauseAudio());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Birds);
