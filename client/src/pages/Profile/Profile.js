import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../../general/components/TextInput.js";
import { useUpdateProfile } from "./hooks/useUpdateProfile.js";

export const Profile = () => {
  const [requestedChange, setRequestedChange] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({
    userName: "",
    password: "",
    confirmPassword: ""
  });

  const updateProfile = useUpdateProfile();

  const isChangeRequestInvalid = (form) => {
    if (!Object.values(form).some((value) => value.length > 0)) {
      return true;
    }
    if (form.userName.length > 0) {
      if (form.userName.length < 5) {
        return true;
      }
    }
    if (form.password.length > 0) {
      if (form.password.length < 5 || form.password !== form.confirmPassword) {
        return true;
      }
    }
    if (form.confirmPassword.length > 0) {
      if (form.confirmPassword.length < 5 || form.password !== form.confirmPassword) {
        return true;
      }
    }
    return false;
  };

  return (
    <Wrapper>
      <Block />
      <ContentContainer>
        <PersonalInfoContainer>
          <Button
            onClick={() => setRequestedChange((current) => !current)}
          >
            {requestedChange ? "Cancel" : "Change Information?"}
          </Button>
        </PersonalInfoContainer>
        {requestedChange &&
            <div>
              <Form>
                <TextInput setForm={setUpdateInfo} label="Username" type="text" formKey="userName" />
                <TextInput setForm={setUpdateInfo} label="Password" type="password" formKey="password" />
                <TextInput setForm={setUpdateInfo} label="Confirm password" type="password" formKey="confirmPassword" />
                <div>
                  <Button
                    type="submit"
                    disabled={isChangeRequestInvalid(updateInfo)}
                    onClick={async () => {
                      const validatedUpdateInfo = Object.fromEntries(
                        Object.entries(updateInfo).filter(([_, value]) => value.length > 0)
                      );
                      await updateProfile(validatedUpdateInfo);
                    }}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
        }
      </ContentContainer>
      <Block />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
`;

const Block = styled.div`
  background: gray;
  width: 20%;
  min-height: 95vh;
`;

const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentContainer = styled.div`
  margin: 150px auto 250px;

  border: solid 3px black;
  padding: 50px 50px;

  border-radius: 15px;
  background: white;
`;

const Button = styled.button`
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
`;
