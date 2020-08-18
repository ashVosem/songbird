import BirdInfo from './BirdInfo';
import { connect } from 'react-redux';

import { birdsSelector } from '../../utils/selectors';

const mapStateToProps = (state) => {
  return {
    isBirdClicked: birdsSelector(state).isBirdClicked,
    isBirdPredicted: birdsSelector(state).isBirdPredicted,
    clickedBirdName: birdsSelector(state).clickedBirdName,
    clickedBirdImage: birdsSelector(state).clickedBirdImage,
    clickedBirdAudio: birdsSelector(state).clickedBirdAudio,
    clickedBirdSpecies: birdsSelector(state).clickedBirdSpecies,
    clickedBirdDescription: birdsSelector(state).clickedBirdDescription,
  };
};

export default connect(mapStateToProps)(BirdInfo);
