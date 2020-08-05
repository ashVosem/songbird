import Bird from './Bird';
import { connect } from 'react-redux';

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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Bird);
