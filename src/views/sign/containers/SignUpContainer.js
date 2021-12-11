import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignUpForm from '../components/signForm/SignUpForm';
import { useSignUp } from '../hooks/useSignUp';

const SignUpContainer = () => {
  const history = useHistory();
  const user = useSelector((state) => state.auth.user);
  if (user) history.push('/');
  const handleSubmit = ({ email, password }) => {
    useSignUp(email, password);
  };
  useEffect(() => {

  }, []);
  return (
    <Container>
      <SignUpForm onSubmit={handleSubmit} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SignUpContainer;
