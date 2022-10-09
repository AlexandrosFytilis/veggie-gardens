import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { vegetableData } from "../../general/utils/vegatableData.js";

export const Information = () => {
  const { item } = useParams();
  const itemInfo = vegetableData.find((searchedItem) => searchedItem.name === item);

  return (
    <InformationContainer>
      <Image src={itemInfo.img}></Image>
      <div>
        <h2>{itemInfo.name}</h2>
        <p>{itemInfo.description}</p>
        <p>Average growth time: {itemInfo.growth} days</p>
        <p>Average time before first harvest: {itemInfo.harvest} Days</p>
      </div>
      <button>Favorite</button>
    </InformationContainer>
  );
};
const InformationContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;

  margin-right: 15px;

  border: solid 3px black;
`;

