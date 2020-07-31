import Bird from './Bird';
import { connect } from 'react-redux';

import updateBird from '../../redux/reducers/birdReducer';

const mapStateToProps = (state) => {
  return {
    birdName: state.birdReducer.birdName,
    birdImage: state.birdReducer.birdImage,
    birdAudio: state.birdReducer.birdAudio,
    RANDOM_SET_OF_BIRDS: state.birdReducer.RANDOM_SET_OF_BIRDS,
    RANDOM_BIRD: state.birdReducer.RANDOM_BIRD,
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
