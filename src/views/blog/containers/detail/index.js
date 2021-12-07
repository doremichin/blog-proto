import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DetailInfo from '../../components/detail';
import { deleteDocument } from '../../../../firebase/query';

const DetailContainer = () => {
  const history = useHistory();
  const { id } = useParams();
  const list = useSelector((state) => state.blog.list);
  const data = list.filter((item) => item.id === id).pop();

  const documentDeleteById = (documentId) => {
    deleteDocument(documentId);
    history.push('/');
  };
  const editDocument = () => {
    history.push(`/edit/${id}`);
  };
  return (
    <Container>
      <DetailInfo data={data} onClickDelete={documentDeleteById} onClickEdit={editDocument} />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
`;

export default DetailContainer;
