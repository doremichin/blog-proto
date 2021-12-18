import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
  const { authInitialized, user } = useSelector((state) => state.auth);

  if (!authInitialized) return 'authorizing...';

  if (!user) return <Redirect to="/signin" />;

  return (
    <Route {...props} />
  );
};

export default PrivateRoute;
