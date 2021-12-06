import React from 'react';
import styled from 'styled-components';

const BlogList = ({ children, data }) => (
  <Container>
    <Row>
      {
          data.map((item, index) => (
            <Col key={item.id || index}>
              {children(item, index)}
            </Col>
          ))
      }
    </Row>

  </Container>
);

const Container = styled.div`
    
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;
const Col = styled.div`
  width: 33.33%;
  padding: 0 15px;
  margin-bottom: 30px;

`;
export default BlogList;
