const initialState = {
  list: [],
};
export const ActionTypes = {
  SET_BLOG_LIST: 'BLOG/SET_BLOG_LIST',
};
export const ActionCreators = {
  setBlogList: (payload) => ({
    type: ActionTypes.SET_BLOG_LIST,
    payload,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
    case ActionTypes.SET_BLOG_LIST: {
      return {
        ...state,
        list: action.payload,
      };
    }
  }
};
export default reducer;
