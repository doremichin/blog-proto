const { createSlice } = require('@reduxjs/toolkit');

const { actions, reducer } = createSlice({
  name: 'blog',
  initialState: {
    list: [],
    detail: {},
  },
  reducers: {
    setBlogList(state, { payload }) {
      state.list = payload;
    },
    setBlogById(state, { payload }) {
      state.detail[payload.id] = payload;
    },
    setBlogDetail(state, { payload }) {
      state.detail = payload;
    },
  },
});
export const { setBlogList, setBlogById, setBlogDetail } = actions;

export default reducer;
