import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import FormMessage, { errorTypes } from '../../../shared/message/FormMessage';
import { Validate } from '../../../../validate';

const SignUpForm = ({ onSubmit }) => {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();

  return (
    <Container>
      <Title>
        Sign-Up
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
          <Label>
            <Input
                  placeholder="이메일을 입력해주세요."
                  type="text"
                  {...register('email', {
                    required: true,
                    validate: { [errorTypes.IS_VALID_EMAIL]: (value) => Validate.isValidEmail(value) },
                  })}
            />
          </Label>
          <FormMessage type={errors?.email?.type} />
        </FormItem>
        <FormItem>
          <Label>
            <Input
                  placeholder="비밀번호를 입력해주세요."
                  type="password"
                  {...register('password', {
                    required: true,
                  })}
            />
          </Label>
          <FormMessage type={errors?.password?.type} />
        </FormItem>
        <ButtonSubmit type="submit">가입 하기</ButtonSubmit>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 50px 0;
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 35px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const FormItem = styled.div`
  margin-bottom: 20px;
`;
const Input = styled.input`
  padding: 10px;
  width: 340px;
  height: 45px;
  border: 1px solid #eee;
`;
const Label = styled.label`
  display: inline-block;
  margin-bottom: 10px;
`;
const LabelText = styled.span`
  
`;
const ButtonSubmit = styled.button`
  cursor: pointer;
  width: 340px;
  height: 45px;
  padding: 10px;
  background-color: #111;
  border: none;
  color: #fff;
  font-size: 14px;
  margin: 20px 0;
`;
const ButtonSignUp = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 340px;
  height: 45px;
  padding: 10px;
  background-color: #111;
  border: none;
  color: #fff;
  font-size: 14px;
  margin: 20px 0;
`;
export default SignUpForm;
