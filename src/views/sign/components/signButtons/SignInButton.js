import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignInButton = () => (
  <Container to="/login">
    Login
  </Container>
);

const Container = styled(Link)`
  display: block;
  border: 1px solid #18f;
  color: #18f;
  border-radius: 3px;font-weight: 500;
  height: 36px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  cursor: pointer;
  text-transform: capitalize;
`;

export default SignInButton;
