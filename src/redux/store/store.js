import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import birdsReducer from '../reducers/birdsReducer';
import birdInfoReducer from '../reducers/birdInfoReducer';
import scoreReducer from '../reducers/scoreReducer';

const reducers = combineReducers({
  birdsReducer,
  birdInfoReducer,
  scoreReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
