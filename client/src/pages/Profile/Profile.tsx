import React, { useContext, useState } from "react";
import styled from "styled-components";
import TextInput from "../../general/components/TextInput";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider";
import { COLORS } from "../../general/utils/colors";
import { useUpdateProfile } from "./hooks/useUpdateProfile";

interface ProfileForm {
  userName: string,
  password: string,
  confirmPassword: string,
}

export const Profile = () => {
  const currentUser = useContext(CurrentUserContext);
  const [requestedChange, setRequestedChange] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({
    userName: "",
    password: "",
    confirmPassword: ""
  });

  const updateProfile = useUpdateProfile();

  const isChangeRequestInvalid = (form: ProfileForm) => {
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
      <LeftBlock />
      {!currentUser.email?.includes("gmail") && (
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
      )}
      <RightBlock />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;

  background: url("https://www.backyardboss.net/wp-content/uploads/2022/08/Shutterstock_1572494956.jpg");
  background-size: 100%;
`;

const LeftBlock = styled.div`
  width: 20%;
  min-height: 95vh;

  border-right: solid 5px ${COLORS.secondaryColor};

  background: ${COLORS.darkPrimaryColor};
`;

const RightBlock = styled.div`
  width: 20%;
  min-height: 95vh;

  border-left: solid 5px ${COLORS.secondaryColor};

  background: ${COLORS.darkPrimaryColor};
`;

const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentContainer = styled.div`
  margin: 150px auto 250px;

  border: solid 3px ${COLORS.secondaryColor};
  padding: 50px 50px;

  border-radius: 15px;
  background: ${COLORS.primaryColor};
`;

const Button = styled.button`
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
`;
