import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider.js";
import { useUpdateProfile } from "../../profile/hooks/useUpdateProfile.js";


export const WateringTracker = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleDateString("en-CA");
  const result = (Date.parse(currentDate) - Date.parse(currentUser.lastWateringDay)) / 24 / 60 / 60 / 1000;
  const updateProfile = useUpdateProfile();

  return result <= 2 ? (
    <Wrapper>
      <DailyInformationContainer>
        <Para><Span>today:</Span> {currentDate}</Para>
        {currentUser.lastWateringDay !== null &&
          <div>
            <Para><Span>last Time Watered:</Span> {currentUser.lastWateringDay}</Para>
            {result !== 0 ? (
              <Para>{result} day(s) since last time garden was watered. Garden should be watered in {3 - result} day(s)!</Para>
            ) : (
              <Para>Garden was watered today!</Para>
            )}
          </div>
        }
      </DailyInformationContainer>
      <Button
        disabled={result === 0 ? true : false}
        onClick={() => updateProfile({ lastWateringDay: currentDate })}
      >
        Water Garden
      </Button>
    </Wrapper >
  ) : (
    <WateringWrapper>
      <DailyInformationContainer>
        <Para><Span>today:</Span> {currentDate}</Para>
        {currentUser.lastWateringDay !== null &&
          <div>
            <Para><Span>last Time Watered:</Span> {currentUser.lastWateringDay}</Para>
            {result !== 0 ? (
              <Para>{result} day(s) since last time garden was watered! <Span>Garden needs to be watered!</Span></Para>
            ) : (
              <Para>Garden was watered today!</Para>
            )}
          </div>
        }
      </DailyInformationContainer>
      <Button
        disabled={result === 0 ? true : false}
        onClick={() => updateProfile({ lastWateringDay: currentDate })}
      >
        Water Garden
      </Button>
    </WateringWrapper >
  );
};

const Wrapper = styled.div`
  background: lime;
  width: 100%;
  height: 11vh;
  border-bottom: solid black 1px;

  display: flex;
  justify-content: space-between;
`;

const WateringWrapper = styled.div`
  background: red;
  width: 100%;
  height: 100px;
  border-bottom: solid black 1px;

  display: flex;
  justify-content: space-between;
`;

const DailyInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 10px;
  font-size: 20px;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Para = styled.p`
  margin: 5px 0;
`;

const Button = styled.button`
  margin: 5px;
`;
