import React from 'react';
import styled from 'styled-components';

const BlogItem = ({ item, index, onClick }) => (
  <Container onClick={() => onClick(item.id)}>
    <Thumb>
      <img src={item.thumbnail} alt="" />
    </Thumb>
    <Desc>
      <h3>{item.title}</h3>
      <p>{item.story}</p>
    </Desc>
  </Container>
);

const Container = styled.div`
  cursor: pointer;
`;
const Thumb = styled.div`
  img{
    width: 100%;
    height: 170px;
    object-fit: cover;
  }
`;
const Desc = styled.div`
  padding: 10px;
  border: 1px solid #eee;
  border-top: 0;
  h3{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 7px;
  }
  p{
    font-size: 15px;
    line-height: 1.6;
    color: #777;
  }
`;
export default BlogItem;
