import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Blog from './pages/Blog';
import Header from './views/shared/header/components';
import MyPage from './pages/MyPage';
import Write from './pages/Write';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import { useAuthState } from './views/auth/hooks/useAuthState';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import WriteButton from './views/shared/button/WriteButton';

const App = () => {
  useAuthState();
  return (
    <Container>
      <Header />

      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/write" component={Write} />
        <Route exact path="/blog/:id" component={Detail} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/mypage" component={MyPage} />
      </Switch>

      <WriteButton />
    </Container>
  );
};

const Container = styled.div`

`;

export default App;
