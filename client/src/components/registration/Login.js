import styled from "styled-components";

export const Login = () => {

  return (
    <Wrapper>
      <Form>
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input
            type={"email"}
            placeholder="Enter email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type={"password"}
            placeholder="Enter password"
          />
        </div>

        <div>
          <label>Remember me</label>
          <input
            type={"checkbox"}
          />
        </div>

        <div>
          <button
            type="submit"
          >
            Submit
          </button>

          <div>
            <p>
              <a href="/signup">sign-up</a>
            </p>
          </div>
        </div>

      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`