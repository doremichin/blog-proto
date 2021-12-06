import axios from 'axios';

import { ActionCreators } from '../../views/blog/redux/slice';

export const getBlogList = (payload) => async (dispatch, getState) => {
  const result = await axios({
    url: '/blog',
    method: 'get',
    params: payload,
  });
  const state = getState();

  dispatch(ActionCreators.setBlogList(result.data));
};
