import React from 'react';
import styled from 'styled-components';

import { googleLogin } from '../../../../firebase/googleLogin';

const GoogleSignInButton = () => (
  <Container onClick={googleLogin}>
    Google Login
  </Container>
);

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  height: 45px;
  padding: 10px;
  background-color: #fff;
  color: #111;
  font-size: 14px;
  margin: 20px 0;
  border: 1px solid #eee;
`;

export default GoogleSignInButton;
