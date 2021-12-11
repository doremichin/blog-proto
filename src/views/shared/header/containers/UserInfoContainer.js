import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserInfo from '../components/UserInfo';
import UserInfoLoader from '../components/UserInfoLoader';
import SignInButton from '../../../sign/components/signButtons/SignInButton';
import SignOutButton from '../../../sign/components/signButtons/SignOutButton';

const UserInfoContainer = () => {
  const { user, authInitialized } = useSelector((state) => state.auth);

  if (!authInitialized) return <UserInfoLoader />;

  if (!user) return <SignInButton />;

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

export default UserInfoContainer;
