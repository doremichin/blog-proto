import React from 'react';
import styled, { css } from 'styled-components';

const DetailInfo = ({ data, onClickDelete, onClickEdit }) => (
  <Container>
    <Title>
      {data.title}
    </Title>
    <Desc>
      {data.story}
    </Desc>
    <ButtonBox>
      <Button blue onClick={onClickEdit}>수정하기</Button>
      <Button red onClick={() => onClickDelete(data.id)}>삭제하기</Button>
    </ButtonBox>
  </Container>
);

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;
const Title = styled.h2`
  margin-bottom: 30px;
  padding: 15px;
`;
const Desc = styled.div`
  min-height: 100px;
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 3px;
  margin-bottom: 30px;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  border-radius: 4px;
  color: #fff;
  ${(props) => props.blue && css`
    background-color: #18f;
  `}
  ${(props) => props.red && css`
    background-color: #ff4a4f;
  `}
`;
export default DetailInfo;
