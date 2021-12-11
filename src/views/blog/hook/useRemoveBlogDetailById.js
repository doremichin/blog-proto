import { setBlogDetail } from '../redux/slice';

export const useRemoveBlogDetailById = (id) => {
  const draftDetail = { ...detail };
  delete draftDetail[id];
  dispatch(setBlogDetail(draftDetail));
};
