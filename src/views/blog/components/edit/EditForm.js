import React from 'react';
import styled from 'styled-components';

import PageTitle from '../../../shared/title/PageTitle';
import BlogForm from '../../../shared/blogForm';

const EditForm = ({ data, onSubmit }) => (
  <Container>
    <PageTitle title="수정하기" />
    <BlogForm data={data} buttonText="수정하기" onSubmit={onSubmit} />
  </Container>
);

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 100px 0;
`;

export default EditForm;
