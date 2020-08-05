const UPDATE_SCORE = 'UPDATE_SCORE';

const UPDATE_LEVEL = 'UPDATE_LEVEL';

const initialState = {
  score: 0,
  level: 0,
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

export const updateLevel = () => ({ type: UPDATE_LEVEL });

export default scoreReducer;
