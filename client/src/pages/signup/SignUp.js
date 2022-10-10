import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../general/components/TextInput.js";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import useSignUp from "./hooks/useSignUp.js";

const isFormValid = (form) => {
  if (form.userName < 5) {
    return true;
  }
  if (!form.email.match(/^.+@.+\..+$/)) {
    return true;
  }
  if (form.password.length < 5) {
    return true;
  }
  if (form.password !== form.confirmPassword) {
    return true;
  }
  return false;
};

export const SignUp = () => {
  const { email } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const signUp = useSignUp();

  const [signUpInfo, setSignUpInfo] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  useEffect(() => {
    if (email !== null) {
      navigate("/");
    }
  }, [email, navigate]);

  return (
    <Wrapper>
      <Form>
        <Header>Sign up</Header>
        <TextInput setForm={setSignUpInfo} label="Username" type="text" formKey="userName" />
        <TextInput setForm={setSignUpInfo} label="Email" type="email" formKey="email" />
        <TextInput setForm={setSignUpInfo} label="Password" type="password" formKey="password" />
        <TextInput setForm={setSignUpInfo} label="Confirm password" type="password" formKey="confirmPassword" />
        <ButtonContainer>
          <Button
            type="submit"
            disabled={isFormValid(signUpInfo)}
            onClick={async (e) => {
              e.preventDefault();
              if (signUpInfo.password !== signUpInfo.confirmPassword) {
                alert("passwords don't match");
              } else {
                await signUp(signUpInfo);
              }
            }}
          >
            Submit
          </Button>
        </ButtonContainer>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: solid 1px black;
  border-radius: 15px;

  padding: 30px 10px;

  width: 30%;

  margin-left: auto;
  margin-right: auto;

  margin-top: 8%;
`;

const Header = styled.h2`
  margin-bottom: 10px;
  font-size: 38px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 80%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 25px;
`;

const Button = styled.button`
  width: 40%;

  &:disabled {

  }
`;
