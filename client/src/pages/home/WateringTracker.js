import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { useUpdateWateringDate } from "./hooks/useUpdateWateringDate.js";


export const WateringTracker = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleDateString("en-CA");
  const result = (Date.parse(currentDate) - Date.parse(currentUser.lastWateringDay)) / 24 / 60 / 60 / 1000;
  const waterPlants = useUpdateWateringDate();

  return (
    <Wrapper>
      <div>
        <p>today: {currentDate}</p>
        <p>last Time Watered: {currentUser.lastWateringDay}</p>
        {currentUser.lastWateringDay !== null &&
          <div>
            <p>{result} days since last time garden was watered</p>
          </div>
        }
      </div>
      <button
        onClick={() => waterPlants("2022-10-03")}
      >Water</button>
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
