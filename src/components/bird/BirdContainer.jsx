import Bird from './Bird';
import { connect } from 'react-redux';

import { updateBird } from '../../redux/reducers/birdsReducer';

import { birdsSelector } from '../../utils/selectors';

const mapStateToProps = (state) => {
  return {
    birdName: birdsSelector(state).birdName,
    birdImage: birdsSelector(state).birdImage,
    birdAudio: birdsSelector(state).birdAudio,
    RANDOM_SET_OF_BIRDS: birdsSelector(state).RANDOM_SET_OF_BIRDS,
    RANDOM_BIRD: birdsSelector(state).RANDOM_BIRD,
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
