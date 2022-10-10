import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../general/components/TextInput.js";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { useLogin } from "./hooks/useLogin.js";

const isFormValid = (form) => {
  if (!form.email.match(/^.+@.+\..+$/)) {
    return false;
  }
  if (form.password.length < 5) {
    return false;
  }
  return true;
};

export const Login = () => {
  const { email } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const login = useLogin();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if (email !== null) {
      navigate("/");
    }
  }, [email, navigate]);

  return (
    <Wrapper>
      <FormContainer>
        <Form>
          <LoginContainer>
            <Title>Veggie Gardens </Title>
            <StyledPara>Log in to your account</StyledPara>
            <TextInput setForm={setLoginInfo} label="Email" type="email" formKey="email" />
            <TextInput setForm={setLoginInfo} label="Password" type="password" formKey="password" />
            <Button
              type="submit"
              disabled={!isFormValid(loginInfo)}
              onClick={async (e) => {
                e.preventDefault();
                login(loginInfo);
              }}
            >
              Submit
            </Button>
          </LoginContainer>
          <div>
            <StyledPara>
              Don&apos;t have an Account?&nbsp; 
              <a href="/signup">sign Up</a>
            </StyledPara>
          </div>
        </Form>
      </FormContainer>
      <WelcomePageContainer>

      </WelcomePageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  height: 100%;
`;

const FormContainer = styled.div`
  width: 25%;
  background: red;
  height: 100%;
  padding: 30px;
`;

const WelcomePageContainer = styled.div`
  width: 75%;
  background: blue;
`;

const LoginContainer = styled.div`
  margin-top: 20px;
  padding: 20px 0 50px 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-bottom: solid 1px black;
`;

const Title = styled.h1`
  padding-bottom: 40px;

  font-size: 48px;
`;

const StyledPara = styled.p`
  font-size: 24px;

  & > a {
    text-decoration: none;
  }
`;

const Button = styled.button`
  margin-top: 30px;
  font-size: 28px;

  &:disabled {
    
  }
`;

