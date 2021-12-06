import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';

import Blog from './pages/Blog';
import Header from './views/shared/header/components';
import MyPage from './pages/MyPage';
import Write from './pages/Write';

const App = () => (
  <Container>
    <Header />
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route exact path="/write" component={Write} />
      <Route exact path="/mypage" component={MyPage} />
    </Switch>

    <ToWrite to="/write">
      <BsPencil />
    </ToWrite>
  </Container>
);

const Container = styled.div`

`;
const ToWrite = styled(Link)`
  position: fixed;
  bottom: 80px;
  right: 60px;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 24px;
  color: #fff;
  background-color: #18f;
  border-radius: 50%;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export default App;
