import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider";
import { useUpdateProfile } from "../../profile/hooks/useUpdateProfile";
export const WateringTracker = () => {
    const { currentUser } = useContext(CurrentUserContext);
    const currentDate = new Date().toLocaleDateString("en-CA");
    const result = (Date.parse(currentDate) - Date.parse(currentUser.lastWateringDay)) / 24 / 60 / 60 / 1000;
    const updateProfile = useUpdateProfile();
    return result <= 2 ? (React.createElement(Wrapper, null,
        React.createElement(DailyInformationContainer, null,
            React.createElement(Para, null,
                React.createElement(Span, null, "today:"),
                " ",
                currentDate),
            currentUser.lastWateringDay !== null &&
                React.createElement("div", null,
                    React.createElement(Para, null,
                        React.createElement(Span, null, "last Time Watered:"),
                        " ",
                        currentUser.lastWateringDay),
                    result !== 0 ? (React.createElement(Para, null,
                        result,
                        " day(s) since last time garden was watered. Garden should be watered in ",
                        3 - result,
                        " day(s)!")) : (React.createElement(Para, null, "Garden was watered today!")))),
        React.createElement(Button, { disabled: result === 0 ? true : false, onClick: () => updateProfile({ lastWateringDay: currentDate }) }, "Water Garden"))) : (React.createElement(WateringWrapper, null,
        React.createElement(DailyInformationContainer, null,
            React.createElement(Para, null,
                React.createElement(Span, null, "today:"),
                " ",
                currentDate),
            currentUser.lastWateringDay !== null &&
                React.createElement("div", null,
                    React.createElement(Para, null,
                        React.createElement(Span, null, "last Time Watered:"),
                        " ",
                        currentUser.lastWateringDay),
                    result !== 0 ? (React.createElement(Para, null,
                        result,
                        " day(s) since last time garden was watered! ",
                        React.createElement(Span, null, "Garden needs to be watered!"))) : (React.createElement(Para, null, "Garden was watered today!")))),
        React.createElement(Button, { disabled: result === 0 ? true : false, onClick: () => updateProfile({ lastWateringDay: currentDate }) }, "Water Garden")));
};
const Wrapper = styled.div `
  background: lime;
  width: 100%;
  height: 11vh;
  border-bottom: solid black 1px;

  display: flex;
  justify-content: space-between;
`;
const WateringWrapper = styled.div `
  background: orange;
  width: 100%;
  height: 100px;
  border-bottom: solid black 1px;

  display: flex;
  justify-content: space-between;
`;
const DailyInformationContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 10px;
  font-size: 20px;
`;
const Span = styled.span `
  font-weight: bold;
`;
const Para = styled.p `
  margin: 5px 0;
`;
const Button = styled.button `
  margin: 5px;
`;
