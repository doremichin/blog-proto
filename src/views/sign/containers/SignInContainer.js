import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SignInForm from '../components/signForm/SignInForm';
import { useSignIn } from '../hooks/useSignIn';

const SignInContainer = () => {
  const history = useHistory();
  const handleSubmit = ({ email, password }) => {
    useSignIn(email, password);
  };
  const user = useSelector((state) => state.auth.user);
  if (user) history.push('/');
  return (
    <Container>
      <SignInForm onSubmit={handleSubmit} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SignInContainer;
