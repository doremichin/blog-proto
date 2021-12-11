import React from 'react';
import styled from 'styled-components';

const PageTitle = ({ title, subTitle }) => (
  <Container>
    <h1>{title}</h1>
    {
          subTitle
          && <p>{subTitle}</p>
      }
  </Container>
);

const Container = styled.div`
    h1{
      
    }
    p{
      
    }
`;

export default PageTitle;
