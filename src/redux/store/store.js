import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import birdsReducer from '../reducers/birdsReducer';
import scoreReducer from '../reducers/scoreReducer';
import notificationReducer from '../reducers/notificationReducer';

const reducers = combineReducers({
  birdsReducer,
  scoreReducer,
  notificationReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
