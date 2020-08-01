import BirdInfo from './BirdInfo';
import { connect } from 'react-redux';

import { birdsSelector } from '../../utils/selectors';

const mapStateToProps = (state) => {
  return {
    isBirdPredicted: birdsSelector(state).isBirdPredicted,
    birdName: birdsSelector(state).birdName,
    birdImage: birdsSelector(state).birdImage,
    birdAudio: birdsSelector(state).birdAudio,
    birdSpecies: birdsSelector(state).birdSpecies,
    birdDescription: birdsSelector(state).birdDescription,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BirdInfo);
