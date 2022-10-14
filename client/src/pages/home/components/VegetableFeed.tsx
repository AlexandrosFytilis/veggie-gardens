import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider";
import { COLORS } from "../../../general/utils/colors";
import { SingleVegetable } from "./SingleVegetable";
import { WateringTracker } from "./WateringTracker";

export const VegetableFeed = () => {
  const { vegetables } = useContext(CurrentUserContext);

  const compare = (first, second) => {
    const isFirst = first.name;
    const isSecond = second.name;

    if (isFirst > isSecond) {
      return 0;
    }
    if (isFirst) {
      return -1;
    }
    return 1;
  };

  return vegetables ? (
    <Wrapper>
      <WateringTracker />
      {vegetables
        .sort(compare)
        .map((item, index) => {
          return <SingleVegetable key={index} item={item} />;
        })}
    </Wrapper>
  ) : (
    <DefaultWrapper>
      <Para>Add Vegetables to your Garden!</Para>
    </DefaultWrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.primaryColor};
  width: 60%;
`;

const DefaultWrapper = styled.div`
  background: ${COLORS.primaryColor};
  width: 60%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Para = styled.h2`
  color: ${COLORS.tertiaryColor};
`;


