import { combineReducers } from 'redux';
import count from './count';
import nav from './nav';
import color from './color';

const rootReducer = {
  count,
  nav,
  color
};

export default combineReducers(rootReducer);
