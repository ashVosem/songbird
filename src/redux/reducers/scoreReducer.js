const UPDATE_SCORE_UP = 'UPDATE_SCORE_UP';
const UPDATE_SCORE_DOWN = 'UPDATE_SCORE_DOWN';
const UPDATE_LEVEL = 'UPDATE_LEVEL';

const initialState = {
  score: 0,
  level: 0,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE_UP: {
      return {
        ...state,
        score: state.score + 1,
      };
    }
    case UPDATE_SCORE_DOWN: {
      return {
        ...state,
        score: state.score - 1,
      };
    }
    default:
      return state;
  }
};

export const updateScoreUp = () => ({ type: UPDATE_SCORE_UP });
export const updateScoreDown = () => ({ type: UPDATE_SCORE_DOWN });
export const updateLevel = () => ({ type: UPDATE_LEVEL });

export default scoreReducer;
