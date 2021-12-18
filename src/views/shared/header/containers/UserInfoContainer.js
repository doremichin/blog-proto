import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import UserInfo from '../components/UserInfo';
import UserInfoLoader from '../components/UserInfoLoader';
import SignOutButton from '../../../sign/components/signButtons/SignoutButton';

const UserInfoContainer = () => {
  const { user, authInitialized } = useSelector((state) => state.auth);

  if (!authInitialized) return <UserInfoLoader />;

  if (!user) return <SignInButton to="/signin">login</SignInButton>;

  return (
    <Container>
      <UserInfo data={user} />
      <SignOutButton />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const SignInButton = styled(Link)`
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
export default UserInfoContainer;
