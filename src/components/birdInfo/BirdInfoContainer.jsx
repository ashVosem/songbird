import BirdInfo from './BirdInfo';
import { connect } from 'react-redux';

import { birdsSelector } from '../../utils/selectors';

const mapStateToProps = (state) => {
  return {
    isBirdClicked: birdsSelector(state).isBirdClicked,
    isBirdPredicted: birdsSelector(state).isBirdPredicted,
    isAudioShouldBeStopped: birdsSelector(state).isAudioShouldBeStopped,
    clickedBirdName: birdsSelector(state).clickedBirdName,
    clickedBirdImage: birdsSelector(state).clickedBirdImage,
    clickedBirdAudio: birdsSelector(state).clickedBirdAudio,
    clickedBirdSpecies: birdsSelector(state).clickedBirdSpecies,
    clickedBirdDescription: birdsSelector(state).clickedBirdDescription,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BirdInfo);
