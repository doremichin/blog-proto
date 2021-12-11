import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserInfo from '../components/UserInfo';
import UserInfoLoader from '../components/UserInfoLoader';
import SignInButton from '../../../sign/components/signButtons/SignInButton';
import SignoutButton from '../../../sign/components/signButtons/SignoutButton';

const UserInfoContainer = () => {
  const { user, authInitialized } = useSelector((state) => state.auth);

  if (!authInitialized) return <UserInfoLoader />;

  if (!user) return <SignInButton />;
  const onClickLogout = () => {

  };
  return (
    <Container>
      <UserInfo data={user} />
      <SignoutButton />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default UserInfoContainer;
