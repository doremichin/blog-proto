import React from 'react';
import styled from 'styled-components';

const DetailContent = ({ data, onEdit, onDelete }) => (
  <Container>
    <Tools>
      <Button className="edit" onClick={onEdit}>수정</Button>
      <Button className="danger" onClick={onDelete}>삭제</Button>
    </Tools>
    <Title>
      {data.title}
    </Title>
    <Story>
      {data.story}
    </Story>
  </Container>
);

const Container = styled.div`
  padding: 50px 0;
  max-width: 800px;
  margin: 0 auto;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 22px;
  margin: 60px 0 30px;
`;
const Story = styled.div`
  font-size: 18px;
  line-height: 1.6;
  white-space: pre-line;
`;
const Tools = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.div`
  width: 90px;
  height: 36px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #fff;
  margin-left: 6px;
  cursor: pointer;
  &.danger {
    background-color: #ff5252;
  }
  &.edit {
    background-color: #39bb19;
  }
`;
export default DetailContent;
