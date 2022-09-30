import React from "react";
import { useState } from "react";

export const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div>
      <form>
        <h2>Sign up</h2>

        <div>
          <label>First name</label>
          <input
            type={"text"}
            placeholder={"First name"}
            onChange={(e) => setSignUpInfo({ ...signUpInfo, firstName: e.target.value })}
          />
        </div>

        <div>
          <label>Last name</label>
          <input
            type={"text"}
            placeholder={"Last name"}
            onChange={(e) => setSignUpInfo({ ...signUpInfo, lastName: e.target.value })}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type={"email"}
            placeholder={"First email"}
            onChange={(e) => setSignUpInfo({ ...signUpInfo, email: e.target.value })}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type={"password"}
            placeholder={"Password"}
            onChange={(e) => setSignUpInfo({ ...signUpInfo, password: e.target.value })}
          />
        </div>

        <div>
          <label>Confirm password</label>
          <input
            type={"password"}
            required={true}
            placeholder={"Confirm password"}
            onChange={(e) => setSignUpInfo({ ...signUpInfo, confirmPassword: e.target.value })}
          />
        </div>

        <div>
          <button
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              console.log(signUpInfo);

              if (signUpInfo.password !== signUpInfo.confirmPassword) {
                console.log("passwords don't match");
              } else {
                await fetch("/add-user", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                  },
                  body: JSON.stringify({
                    firstName: signUpInfo.firstName,
                    lastName: signUpInfo.lastName,
                    email: signUpInfo.email,
                    password: signUpInfo.password
                  })
                });
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
