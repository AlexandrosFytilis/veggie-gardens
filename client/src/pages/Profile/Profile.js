import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../../general/components/TextInput";
import { COLORS } from "../../general/utils/colors";
import { useUpdateProfile } from "./hooks/useUpdateProfile";
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
    return (React.createElement(Wrapper, null,
        React.createElement(LeftBlock, null),
        React.createElement(ContentContainer, null,
            React.createElement(PersonalInfoContainer, null,
                React.createElement(Button, { onClick: () => setRequestedChange((current) => !current) }, requestedChange ? "Cancel" : "Change Information?")),
            requestedChange &&
                React.createElement("div", null,
                    React.createElement(Form, null,
                        React.createElement(TextInput, { setForm: setUpdateInfo, label: "Username", type: "text", formKey: "userName" }),
                        React.createElement(TextInput, { setForm: setUpdateInfo, label: "Password", type: "password", formKey: "password" }),
                        React.createElement(TextInput, { setForm: setUpdateInfo, label: "Confirm password", type: "password", formKey: "confirmPassword" }),
                        React.createElement("div", null,
                            React.createElement(Button, { type: "submit", disabled: isChangeRequestInvalid(updateInfo), onClick: async () => {
                                    const validatedUpdateInfo = Object.fromEntries(Object.entries(updateInfo).filter(([_, value]) => value.length > 0));
                                    await updateProfile(validatedUpdateInfo);
                                } }, "Submit"))))),
        React.createElement(RightBlock, null)));
};
const Wrapper = styled.div `
  display: flex;
  justify-content: space-between;
  max-width: 100vw;

  background: url("https://www.backyardboss.net/wp-content/uploads/2022/08/Shutterstock_1572494956.jpg");
  background-size: 100%;
`;
const LeftBlock = styled.div `
  width: 20%;
  min-height: 95vh;

  border-right: solid 5px ${COLORS.secondaryColor};

  background: ${COLORS.darkPrimaryColor};
`;
const RightBlock = styled.div `
  width: 20%;
  min-height: 95vh;

  border-left: solid 5px ${COLORS.secondaryColor};

  background: ${COLORS.darkPrimaryColor};
`;
const PersonalInfoContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ContentContainer = styled.div `
  margin: 150px auto 250px;

  border: solid 3px ${COLORS.secondaryColor};
  padding: 50px 50px;

  border-radius: 15px;
  background: ${COLORS.primaryColor};
`;
const Button = styled.button `
  width: 100%;
`;
const Form = styled.form `
  width: 100%;
  box-sizing: border-box;
`;
