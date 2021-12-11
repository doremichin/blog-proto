import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

import { deleteDocument } from '../../../../firebase/query';
import DetailContent from '../../components/detail';
import { useBlogDetail } from '../../hook/useBlogDetail';

const DetailContainer = () => {
  const { id } = useParams();
  const history = useHistory();
  const data = useBlogDetail(id);

  const handleEdit = () => {
    history.push(`/edit/${id}`);
  };
  const handleDelete = () => {
    deleteDocument('blog', id);
    history.push('/');
  };

  if (!data) return '...loading';

  return (
    <Container>
      <DetailContent data={data} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
};

const Container = styled.div`

`;

export default DetailContainer;
