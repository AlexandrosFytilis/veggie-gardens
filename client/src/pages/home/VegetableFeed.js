import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { useDeleteVegetable } from "./hooks/useDeleteVegetable.js";

export const VegetableFeed = () => {
  const { vegetables } = useContext(CurrentUserContext);
  const deleteVegetable = useDeleteVegetable();

  if (!vegetables) {
    return null;
  }

  return (
    <Wrapper>
      {vegetables.map((item, index) => {
        return (
          <SingleVegetableContainer key={index}>
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{item.id}</p>
            <button
              onClick={() => {deleteVegetable(item.id);}
              }>X</button>
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
