import { configureStore } from '@reduxjs/toolkit';

import blogReducer from '../views/blog/redux/slice';
import authReducer from '../views/auth/redux/slice';

const store = configureStore({
  reducer: {
    blog: blogReducer,
    auth: authReducer,
  },
});

export default store;
