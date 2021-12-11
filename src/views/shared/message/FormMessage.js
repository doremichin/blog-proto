import React from 'react';
import styled from 'styled-components';

import Message from './Message';

export const errorTypes = {
  IS_VALID_EMAIL: 'isValidEmail',
  REQUIRED: 'required',
  IS_VALID_STORY_LENGTH: 'isValidStoryLength',
};
const messageComponent = {
  [errorTypes.IS_VALID_EMAIL]: <Message error>이메일을 입력하세요</Message>,
  [errorTypes.REQUIRED]: <Message error>필수입력</Message>,
  [errorTypes.IS_VALID_STORY_LENGTH]: <Message error>200자 이상</Message>,
};

const FormMessage = ({ type }) => (
  <Container>
    {messageComponent[type]}
  </Container>
);

const Container = styled.div`

`;

export default FormMessage;
