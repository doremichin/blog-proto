const { createSlice } = require('@reduxjs/toolkit');

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: {
    authInitialized: false,
    user: null,
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
  },
});
export const { setUser, updateState } = actions;

export default reducer;
