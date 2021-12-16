import React from 'react';
import styled from 'styled-components';
import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WriteButton = () => {
  const user = useSelector((state) => state.auth.user);
  if (user === null) return null;
  return (
    <ToWrite to="/write">
      <BsPencil />
    </ToWrite>
  );
};
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

export default WriteButton;
