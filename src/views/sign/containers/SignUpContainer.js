import React from 'react';
import styled from 'styled-components';

import SignUpForm from '../components/signForm/SignUpForm';
import { signUp } from '../../../firebase/auth';

const SignUpContainer = () => {
  const onSubmit = (values) => {
    signUp(values.email, values.password);
  };
  return (
    <Container>
      <SignUpForm onSubmit={onSubmit} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SignUpContainer;
