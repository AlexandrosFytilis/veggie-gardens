import { useState } from "react";
import styled from "styled-components";

export const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  return (
    <div>
      <form>
        <h2>Sign up</h2>

        <div>
          <label>First name</label>
          <input 
            type={"text"}
            placeholder={"First name"}
            onChange={(e) => setSignUpInfo({ ...signUpInfo, firstName: e.target.value})}
          />
        </div>

        <div>
          <label>Last name</label>
          <input 
            type={"text"}
            placeholder={"Last name"}
            onChange={(e) => setSignUpInfo({...signUpInfo, lastName: e.target.value})}
          />
        </div>

        <div>
          <label>Email</label>
          <input 
            type={"email"}
            placeholder={"First email"}
            onChange={(e) => setSignUpInfo({...signUpInfo, email: e.target.value})}
          />
        </div>

        <div>
          <label>Password</label>
          <input 
            type={"password"}
            placeholder={"Password"}
            onChange={(e) => setSignUpInfo({...signUpInfo, password: e.target.value})}
          />
        </div>

        <div>
          <label>Confirm password</label>
          <input 
            type={"password"}
            placeholder={"Confirm password"}
            onChange={(e) => setSignUpInfo({...signUpInfo, confirmPassword: e.target.value})}
          />
        </div>

        <div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              console.log(signUpInfo)
            }}
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  )
}