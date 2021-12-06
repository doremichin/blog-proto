import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import WriteForm from '../../components/write/WriteForm';
import { setDocument } from '../../../../firebase/query';

const WriteContainer = () => {
  const history = useHistory();
  const writeBlog = (data) => {
    console.log(data);
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
