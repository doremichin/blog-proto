import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import EditForm from '../../components/edit/EditForm';
import { useBlogDetail } from '../../hook/useBlogDetail';
import { editDocument } from '../../../../firebase/query';
import { setBlogDetail } from '../../redux/slice';

const EditContainer = () => {
  const { id } = useParams();
  const detail = useSelector((state) => state.blog.detail);
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useBlogDetail(id);

  const handleSubmit = async (data) => {
    await editDocument('blog', id, data);
    const draftDetail = { ...detail };
    delete draftDetail[id];
    dispatch(setBlogDetail(draftDetail));
    history.push('/');
  };
  if (!data) return null;

  return (
    <Container>
      <EditForm data={data} onSubmit={handleSubmit} />
    </Container>
  );
};

const Container = styled.div`
                      
                      `;

export default EditContainer;
