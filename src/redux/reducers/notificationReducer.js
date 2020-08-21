const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

const initialState = {
  isNotificationShouldBeShown: false,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION: {
      return {
        ...state,
        isNotificationShouldBeShown: true,
      };
    }
    case HIDE_NOTIFICATION: {
      return {
        ...state,
        isNotificationShouldBeShown: false,
      };
    }
    default:
      return state;
  }
};

export const showNotification = () => ({ type: SHOW_NOTIFICATION });
export const hideNotification = () => ({ type: HIDE_NOTIFICATION });

export default scoreReducer;
