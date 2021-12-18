import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';

import Blog from './pages/Blog';
import Write from './pages/Write';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import MyPage from './pages/MyPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './PrivateRoute';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Blog} />
    <PrivateRoute exact path="/write" component={Write} />
    <Route exact path="/blog/:id" component={Detail} />
    <Route exact path="/edit/:id" component={Edit} />
    <Route exact path="/mypage" component={MyPage} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
    <Redirect path="*" push="/" />
  </Switch>

);
