import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import WriteForm from '../../components/write/WriteForm';
import { setDocument } from '../../../../firebase/query';

const WriteContainer = () => {
  const history = useHistory();
  const user = useSelector((state) => state.auth.user);

  if (user === null) history.push('/');

  const writeBlog = (data) => {
    setDocument('blog', data);
    history.push('/');
  };

  return (
    <Container>
      <WriteForm onSubmit={writeBlog} />
    </Container>
  );
};

const Container = styled.div`

`;

export default WriteContainer;
