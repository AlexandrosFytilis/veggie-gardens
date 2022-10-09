import React, { useState } from "react";
import styled from "styled-components";
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
      <p>{item.name}</p>
      {item.datePlanted !== null ? (
        <div>
          <p>Planted: {item.datePlanted}</p>
          {daysFullyGrown > 0 ? (
            <p>Plant fully grown in approximately {daysFullyGrown} days</p>
          ) : (
            <p>Plant fully grown!</p>
          )}
          {daysBeforeHarvest > 0 ? (
            <p>First available harvest in approximately {daysBeforeHarvest} days</p>
          ) : (
            <p>Harvesting Time!</p>
          )}
        </div>
      ) : (
        <div>
          <p>not planted</p>
          <input
            onChange={(e) => {
              setPlantedDate(e.target.value);
            }}
            type="date"
            id="start"
            name="trip-start"
            value={plantedDate}
            min="2022-10-01"
            max="2022-12-31"
          />
          <button
            onClick={() => {
              if (plantedDate.length > 0) {
                plantVegetable(item, plantedDate);
              } else {
                alert("error");
              }
            }}
          >Plant</button>
        </div>
      )}
      <button
        onClick={() => { deleteVegetable(item.id); }
        }>X</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: solid black 1px;
`;
