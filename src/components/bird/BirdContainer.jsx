import Bird from './Bird';
import { connect } from 'react-redux';

import { updateBird } from '../../redux/reducers/birdsReducer';

import { birdsSelector } from '../../utils/selectors';

const mapStateToProps = (state) => {
  return {
    isBirdPredicted: birdsSelector(state).isBirdPredicted,
    birdName: birdsSelector(state).birdName,
    birdImage: birdsSelector(state).birdImage,
    birdAudio: birdsSelector(state).birdAudio,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBird: () => {
      dispatch(updateBird());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bird);
