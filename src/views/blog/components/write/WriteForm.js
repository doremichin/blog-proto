import React from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';

const WriteForm = ({ onSubmit, data = {} }) => {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm({
    defaultValues: {
      title: data.title,
      story: data.story,
    },
  });
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
          <Label>
            <LabelText>제목</LabelText>
            <Input type="text" {...register('title')} />
          </Label>
        </FormItem>

        <FormItem>
          <Label>
            <LabelText>내용</LabelText>
            <TextArea type="text" {...register('story')} />
          </Label>
        </FormItem>
        {
          !Object.keys(data).length > 0
            ? <ButtonSubmit type="submit">새 글 쓰기</ButtonSubmit>
            : <ButtonSubmit type="submit">수정 완료</ButtonSubmit>
        }
      </Form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 100px 0;
`;
const Form = styled.form`
  width: 100%;
  display: block;
`;
const FormItem = styled.div`
  margin-bottom: 30px;
`;
const Label = styled.label`
  
`;
const LabelText = styled.span`
  height: 40px;
  display: flex;
  align-items: center;
  color: #333;
  font-size: 15px;
`;
const formControl = css`
  display: block;
  width: 100%;
  border: 1px solid #000;
  padding: 8px;
`;
const Input = styled.input`
  ${formControl};
  height: 40px;
  
`;
const TextArea = styled.textarea`
  ${formControl};
  height: 300px;
  resize: vertical;
`;
const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #18f;
  color: #fff;
  height: 40px;
  width: 100%;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(17, 136, 255, 0.6);
  }
`;
export default WriteForm;
