import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './views/shared/header/components';
import { useAuthState } from './views/auth/hooks/useAuthState';
import { Routes } from './Routes';
import WriteButton from './views/blog/components/write/WriteButton';

const App = () => {
  useAuthState();
  return (
    <Container>
      <Header />

      <Routes />

      <WriteButton />

      <ToastContainer />
    </Container>
  );
};

const Container = styled.div`

`;

export default App;
