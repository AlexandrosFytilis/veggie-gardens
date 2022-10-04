import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { vegetableData } from "../../general/utils/vegatableData.js";

export const VegetableFeed = () => {
  const { selectedGardenVegetables } = useContext(CurrentUserContext);

  return (
    <Wrapper>
      {selectedGardenVegetables.map((item, index) => {
        const vegetableInformation = vegetableData.find((element) => element.name === item);
        return (
          <SingleVegetableContainer key={index}>
            <p>{vegetableInformation.name}</p>
            <p>{vegetableInformation.description}</p>
          </SingleVegetableContainer>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 100%;
`;

const SingleVegetableContainer = styled.div`
  border-bottom: solid black 1px;
`;
