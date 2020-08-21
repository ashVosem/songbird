import WinNotification from './WinNotification';
import { connect } from 'react-redux';

import { scoreSelector } from '../../utils/selectors';

import { hideNotification } from '../../redux/reducers/notificationReducer';

const mapStateToProps = (state) => {
  return {
    score: scoreSelector(state).score,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideNotification: () => {
      dispatch(hideNotification());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WinNotification);
