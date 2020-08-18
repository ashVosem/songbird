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

export default connect(mapStateToProps)(Bird);
