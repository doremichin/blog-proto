import React from 'react';
import styled from 'styled-components';

import SignInForm from '../components/signForm/SignInForm';
import { signIn } from '../../../firebase/auth';

const SignInContainer = () => {
  const onSubmit = (values) => {
    signIn(values.email, values.password);
  };
  return (
    <Container>
      <SignInForm onSubmit={onSubmit} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SignInContainer;
