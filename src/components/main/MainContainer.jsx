import Main from './Main';
import { connect } from 'react-redux';

import { notificationSelector } from '../../utils/selectors';

const mapStateToProps = (state) => {
  return {
    isNotificationShouldBeShown: notificationSelector(state)
      .isNotificationShouldBeShown,
  };
};

export default connect(mapStateToProps)(Main);
