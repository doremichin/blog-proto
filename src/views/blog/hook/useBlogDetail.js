import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setBlogById } from '../redux/slice';
import { getDocument } from '../../../firebase/query';

export const useBlogDetail = (id) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const detail = useSelector((state) => state.blog.detail);
  const data = detail[id];
  const getBlog = async () => {
    if (data) return;

    const blog = await getDocument('blog', id);
    if (blog === null) {
      alert('해당 페이지가 존재하지 않습니당');
      history.goBack();
      return;
    }

    dispatch(setBlogById(blog));
  };

  useEffect(() => {
    getBlog();
  }, []);
  return data;
};
