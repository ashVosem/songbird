import Birds from './Birds';
import { connect } from 'react-redux';

import { birdsSelector } from '../../utils/selectors';

const mapStateToProps = (state) => {
  return {
    RANDOM_SET_OF_BIRDS: birdsSelector(state).RANDOM_SET_OF_BIRDS,
    RANDOM_BIRD: birdsSelector(state).RANDOM_BIRD,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Birds);
