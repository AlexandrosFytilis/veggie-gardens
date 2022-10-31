import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../../general/components/TextInput";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider";
import { COLORS } from "../../general/utils/colors";
import { useLogin } from "./hooks/useLogin";

export interface LoginForm {
  email: string,
  password: string
}

const isFormValid = (form: LoginForm) => {
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
            <a href="http://localhost:8000/oauth">
              GOOGLE
            </a>
          </LoginContainer>
          <>
            <StyledPara>
              Don&apos;t have an Account?&nbsp; 
              <a href="/signup">sign Up</a>
            </StyledPara>
          </>
        </Form>
      </FormContainer>
      <WelcomePageContainer>
        <Container>
          <WelcomeMessage>Setup and Organize your dream garden!</WelcomeMessage>
        </Container>
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
  background: ${COLORS.primaryColor};
  height: 100%;
  padding: 30px;

  border-right: solid 5px ${COLORS.secondaryColor};
`;

const Container = styled.div`
  background: green;
  opacity: 100%;
`;

const WelcomePageContainer = styled.div`
  width: 75%;
  background-image: url("https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/3/29/0/shutterstock_Irina-Fischer_491150020_garden-design.jpg.rend.hgtvcom.1280.853.suffix/1522338145651.jpeg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const WelcomeMessage = styled.p`
  font-size: 70px;
  font-weight: bold;
  color: white;

  margin-top: 60px;
  padding: 20px;
`;

const LoginContainer = styled.div`
  margin-top: 20px;
  padding: 20px 0 50px 0;

  width: 85%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-bottom: solid 3px ${COLORS.secondaryColor};
`;

const Title = styled.h1`
  padding-bottom: 40px;
  color: ${COLORS.tertiaryColor};

  font-size: 46px;
`;

const StyledPara = styled.p`
  font-size: 24px;
  color: ${COLORS.secondaryColor};

  & > a {
    color: ${COLORS.tertiaryColor};
  }
`;

const Button = styled.button`
  margin-top: 30px;
  font-size: 28px;
  color: ${COLORS.secondaryColor};
  background: green;
  border: solid 2px ${COLORS.secondaryColor};

  &:disabled {
    background: ${COLORS.primaryColor};
  }
`;

