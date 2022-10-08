import React, { useContext, useState } from "react";
import styled from "styled-components";
import TextInput from "../../general/components/TextInput.js";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { useUpdateProfile } from "./hooks/useUpdateProfile.js";

export const Profile = () => {
  const { currentUser } = useContext(CurrentUserContext);
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
      <div>
        <div>
          <p>UserName: {currentUser.userName}</p>
          <p>Email: {currentUser.email}</p>
          <button
            onClick={() => setRequestedChange((current) => !current)}
          >
            {requestedChange ? "Cancel" : "Change Information?"}
          </button>
        </div>
        {requestedChange &&
            <div>
              <form>
                <TextInput setForm={setUpdateInfo} label="Username" type="text" formKey="userName" />
                <TextInput setForm={setUpdateInfo} label="Password" type="password" formKey="password" />
                <TextInput setForm={setUpdateInfo} label="Confirm password" type="password" formKey="confirmPassword" />
                <div>
                  <button
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
                  </button>
                </div>
              </form>
            </div>
        }
      </div>
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
