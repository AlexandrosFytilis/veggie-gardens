import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../general/utils/colors.js";
import { useDeleteVegetable } from "../hooks/useDeleteVegetable.js";
import { usePlantVegetable } from "../hooks/usePlantVegetable.js";

export const SingleVegetable = ({ item }) => {
  const deleteVegetable = useDeleteVegetable();
  const plantVegetable = usePlantVegetable();
  const [plantedDate, setPlantedDate] = useState((new Date()).toLocaleDateString("en-CA"));
  const currentDate = new Date().toLocaleDateString("en-CA");

  const daysBeforeHarvest = item.harvest - ((Date.parse(currentDate) - Date.parse(item.datePlanted)) / 24 / 60 / 60 / 1000);
  const daysFullyGrown = item.growth - ((Date.parse(currentDate) - Date.parse(item.datePlanted)) / 24 / 60 / 60 / 1000);


  return (
    <Wrapper>
      {item.datePlanted !== null ? (
        <VegetableContainer>
          <Image src={item.img}></Image>
          <DescriptionContainer>
            <VegetableName><Span>{item.name}</Span></VegetableName>
            <Para><Span>Planted:</Span> {item.datePlanted}</Para>
            {daysFullyGrown > 0 ? (
              <Para>Plant fully grown in approximately: {daysFullyGrown} days</Para>
            ) : (
              <Para>Plant fully grown!</Para>
            )}
            {daysBeforeHarvest > 0 ? (
              <Para>First available harvest in approximately: {daysBeforeHarvest} days</Para>
            ) : (
              <Para>Harvesting Time!</Para>
            )}
          </DescriptionContainer>
        </VegetableContainer>
      ) : (
        <VegetableContainer>
          <Image src={item.img}></Image>
          <DescriptionContainer>
            <VegetableName><Span>{item.name}</Span></VegetableName>
            <Para><Span>not planted*</Span></Para>
            <Input
              onChange={(e) => {
                setPlantedDate(e.target.value);
              }}
              type="date"
              id="start"
              name="trip-start"
              value={plantedDate}
              min="2022-09-01"
              max="2022-12-31"
            />
          </DescriptionContainer>
        </VegetableContainer>
      )}
      <ButtonsContainer>
        <Button
          onClick={() => { deleteVegetable(item.id); }
          }>Remove</Button>
        {item.datePlanted === null && (
          <Button
            onClick={() => {
              if (plantedDate.length > 0) {
                plantVegetable(item, plantedDate);
              } else {
                alert("error");
              }
            }}
          >Plant</Button>
        )}
      </ButtonsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: solid black 1px;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  height: 12vh;

  background: ${COLORS.primaryColor};
`;

const VegetableContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;

  border: solid 2px black;
`;

const VegetableName = styled.p`
  font-size: 28px;
  color: ${COLORS.tertiaryColor};
`;

const Para = styled.p`
  font-size: 20px;
  color: ${COLORS.tertiaryColor};
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 15px;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Input = styled.input`
  width: 160px;
  border: solid 2px ${COLORS.tertiaryColor};
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;

  &:hover {
    background: ${COLORS.tertiaryColor};
    color: ${COLORS.darkPrimaryColor};
    border: solid 2px ${COLORS.darkPrimaryColor};
  }
`;
