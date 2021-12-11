import React from 'react';
import styled from 'styled-components';

const UserInfo = ({ data }) => (
  <Container>
    <Avatar>
      <img src={data.photoURL} alt="" />
    </Avatar>
    <Info>
      <p>
        <strong>{data.displayName}</strong>
      </p>
      <p>{data.email}</p>

    </Info>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  display: flex;
  img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
const Info = styled.div`
  padding: 0 8px;
  p{
    font-size: 13px;
    color: #333;
    strong{
      font-weight: 500;
    }
    & + p {
      margin-top: 4px;
    }
  }
`;
export default UserInfo;
