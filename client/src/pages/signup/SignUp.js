import React from "react";
import { useState } from "react";
import TextInput from "../../general/components/TextInput.js";
import useSignUp from "./hooks/useSignUp.js";

const isFormIncomplete = (form) => {
  return Object.values(form).some((value) => value.length === 0);
};

export const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const signUp = useSignUp();

  return (
    <div>
      <form>
        <h2>Sign up</h2>
        <TextInput setForm={setSignUpInfo} label="First name" type="text" formKey="firstName" />
        <TextInput setForm={setSignUpInfo} label="Last name" type="text" formKey="lastName" />
        <TextInput setForm={setSignUpInfo} label="Email" type="email" formKey="email" />
        <TextInput setForm={setSignUpInfo} label="Password" type="password" formKey="password" />
        <TextInput setForm={setSignUpInfo} label="Confirm password" type="password" formKey="confirmPassword" />
        <div>
          {isFormIncomplete(signUpInfo) ? (
            <button disabled>
                Disabled
            </button>
          ) : (
            <button
              type="submit"
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
          )}
        </div>
      </form>
    </div>
  );
};
