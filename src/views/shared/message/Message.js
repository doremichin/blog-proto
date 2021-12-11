import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const Message = ({ children, error }) => (
  <Container className={cn({ error })}>
    {children}
  </Container>
);

const Container = styled.div`
  &.error{
    color: #ff5252;
  }
  color: #18f;
`;

export default Message;
