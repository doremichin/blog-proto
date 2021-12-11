import React from 'react';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';

import FormMessage, { errorTypes } from '../message/FormMessage';
import { Validate } from '../../../validate';

const BlogForm = ({ onSubmit, data, buttonText }) => {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
          <Label>
            <LabelText>제목</LabelText>
            <Input
                type="text"
                {...register('title', { required: true })}
                defaultValue={data?.title}
            />
          </Label>
          <FormMessage type={errors?.title?.type} />
        </FormItem>

        <FormItem>
          <Label>
            <LabelText>내용</LabelText>
            <TextArea
                type="text"
                {...register('story', {
                  required: true,
                  validate: { [errorTypes.IS_VALID_STORY_LENGTH]: (value) => Validate.isMinLength(value, 30) },
                })}
                defaultValue={data?.story}
            />
          </Label>
          <FormMessage type={errors?.story?.type} />
        </FormItem>

        <ButtonSubmit type="submit">{buttonText}</ButtonSubmit>
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

export default BlogForm;
