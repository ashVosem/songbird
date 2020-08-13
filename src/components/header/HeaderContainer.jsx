import Header from './Header';
import { connect } from 'react-redux';

import { scoreSelector } from '../../utils/selectors';
import { birdsSelector } from '../../utils/selectors';

const mapStateToProps = (state) => {
  return {
    score: scoreSelector(state).score,
    SET_OF_BIRDS: birdsSelector(state).SET_OF_BIRDS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
