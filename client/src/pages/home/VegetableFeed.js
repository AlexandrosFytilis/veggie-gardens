import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { SingleVegetable } from "./SingleVegetable.js";

export const VegetableFeed = () => {
  const { vegetables } = useContext(CurrentUserContext);

  if (!vegetables) {
    return null;
  }

  return (
    <Wrapper>
      {vegetables.map((item, index) => {
        return <SingleVegetable key={index} item={item}/>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 100%;
`;
