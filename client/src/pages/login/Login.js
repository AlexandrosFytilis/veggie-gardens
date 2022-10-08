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
      <Form>
        <h2>Login</h2>
        <div>
          <TextInput setForm={setLoginInfo} label="Email" type="email" formKey="email" />
          <TextInput setForm={setLoginInfo} label="Password" type="password" formKey="password" />
          <button
            type="submit"
            disabled={!isFormValid(loginInfo)}
            onClick={async (e) => {
              e.preventDefault();
              login(loginInfo);
            }}
          >
            Submit
          </button>
          <div>
            <p><a href="/signup">sign-up</a></p>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
