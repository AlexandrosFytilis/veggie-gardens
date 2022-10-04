import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";

export const VegetableFeed = () => {
  const { selectedGardenVegetables } = useContext(CurrentUserContext);

  const itemList = [
    "Tomato",
    "Carrot",
    "Cucumber",
    "Corn",
    "Onion",
    "Potato",
    "Celery",
    "Raddish"
  ];

  return (
    <Wrapper>
      {selectedGardenVegetables.map((item, index) => {
        
        return (
          <div key={index}>
            <p>{item}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  min-height: 100%;
  width: 100%;
`;
