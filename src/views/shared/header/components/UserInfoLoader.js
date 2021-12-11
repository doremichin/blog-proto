import React from 'react';
import styled from 'styled-components';

const UserInfoLoader = () => (
  <Container>
    <Avatar />
    <Info>
      <p />
      <p />
    </Info>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #eee;
  margin-right: 6px;
`;
const Info = styled.div`
  p{
    width: 130px;
    height: 15px;
    background: #eee;
    & + p {
      margin-top: 4px;
    }
  }
`;
export default UserInfoLoader;
