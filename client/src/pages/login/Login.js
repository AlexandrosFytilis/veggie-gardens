import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../../general/components/TextInput.js";

export const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });
  console.log(loginInfo);
  return (
    <Wrapper>
      <Form>
        <h2>Login</h2>
        <div>
          <TextInput setForm={setLoginInfo} label="Email" type="email" formKey="email" />
          <TextInput setForm={setLoginInfo} label="Password" type="password" formKey="password" />
          <button
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              console.log(loginInfo);
              const response = await fetch(`/users/${loginInfo.email}`);
              const json = await response.json();
              console.log(json);
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
