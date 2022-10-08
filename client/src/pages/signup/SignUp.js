import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <div>
      <form>
        <h2>Sign up</h2>
        <TextInput setForm={setSignUpInfo} label="Username" type="text" formKey="userName" />
        <TextInput setForm={setSignUpInfo} label="Email" type="email" formKey="email" />
        <TextInput setForm={setSignUpInfo} label="Password" type="password" formKey="password" />
        <TextInput setForm={setSignUpInfo} label="Confirm password" type="password" formKey="confirmPassword" />
        <div>
          <button
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
          </button>
        </div>
      </form>
    </div>
  );
};
