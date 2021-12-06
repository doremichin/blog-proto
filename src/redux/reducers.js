import { combineReducers } from 'redux';

import blogReducer from '../views/blog/redux/slice';

const reducers = combineReducers({
  blog: blogReducer,
});

export default reducers;
