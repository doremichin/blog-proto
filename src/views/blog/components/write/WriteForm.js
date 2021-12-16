import React from 'react';
import styled from 'styled-components';

import BlogForm from '../../../shared/blogForm';
import PageTitle from '../../../shared/title/PageTitle';

const WriteForm = ({ onSubmit }) => (
  <Container>
    <PageTitle title="새글 작성" />
    <BlogForm onSubmit={onSubmit} buttonText="작성하기" />
  </Container>
);

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 100px 0;
`;
export default WriteForm;
