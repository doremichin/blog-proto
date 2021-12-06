import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => (
  <Container>
    <Logo>
      blog
    </Logo>
    <Nav>
      <NavLink to="/">home</NavLink>
      <NavLink to="/mypage">mypage</NavLink>
    </Nav>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  border-bottom: 1px solid #eee;
`;
const Logo = styled.div`
  font-size: 20px;
  color: #333;
  text-transform: uppercase;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
`;
const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  font-size: 16px;
  color: #333;
  &:hover{
    color: #18f;
  }
`;

export default React.memo(Header);
