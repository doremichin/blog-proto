import React from 'react';
import styled from 'styled-components';

import { googleLogout } from '../../../../firebase/googleLogin';

const SignoutButton = () => (
  <Container onClick={googleLogout}>
    logout
  </Container>
);

const Container = styled.div`
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

export default SignoutButton;
