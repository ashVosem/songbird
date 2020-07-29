import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import birdReducer from '../reducers/birdReducer';
import scoreReducer from '../reducers/scoreReducer';

const reducers = combineReducers({
  birdReducer,
  scoreReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
