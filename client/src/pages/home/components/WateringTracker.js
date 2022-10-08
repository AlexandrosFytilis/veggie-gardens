import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider.js";
import { useUpdateProfile } from "../../profile/hooks/useUpdateProfile.js";


export const WateringTracker = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleDateString("en-CA");
  const result = (Date.parse(currentDate) - Date.parse(currentUser.lastWateringDay)) / 24 / 60 / 60 / 1000;
  const updateProfile = useUpdateProfile();

  return (
    <Wrapper>
      <div>
        <p>today: {currentDate}</p>
        {currentUser.lastWateringDay !== null &&
          <div>
            <p>last Time Watered: {currentUser.lastWateringDay}</p>
            {result !== 0 ? (
              <p>{result} day(s) since last time garden was watered.</p>
            ) : (
              <p>Garden was watered today!</p>
            )}
          </div>
        }
      </div>
      <button
        disabled={result === 0 ? true : false}
        onClick={() => updateProfile({lastWateringDay: currentDate})}
      >Water Garden</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: pink;
  width: 100%;
  height: 80px;
  border-bottom: solid black 1px;

  display: flex;
`;
