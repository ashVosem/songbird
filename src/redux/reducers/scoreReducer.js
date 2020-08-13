const UPDATE_SCORE = 'UPDATE_SCORE';

const initialState = {
  score: 0,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE: {
      return {
        ...state,
        score: state.score + action.points,
      };
    }

    default:
      return state;
  }
};

export const updateScore = (points) => ({ type: UPDATE_SCORE, points: points });

export default scoreReducer;
