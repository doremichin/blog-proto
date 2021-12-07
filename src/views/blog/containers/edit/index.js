import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import WriteForm from '../../components/write/WriteForm';
import { updateDocument } from '../../../../firebase/query';

const EditContainer = () => {
  const history = useHistory();
  const { id } = useParams();
  const list = useSelector((state) => state.blog.list);
  const data = list.filter((item) => item.id === id).pop();
  const editBlog = (data) => {
    updateDocument(id, data);
    history.push('/');
  };
  return (
    <Container>
      <WriteForm data={data} onSubmit={editBlog} />
    </Container>
  );
};

const Container = styled.div`

`;

export default EditContainer;
