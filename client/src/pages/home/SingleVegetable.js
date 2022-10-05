import React, { useState } from "react";
import styled from "styled-components";
import { useDeleteVegetable } from "./hooks/useDeleteVegetable.js";

export const SingleVegetable = ({ item }) => {
  const deleteVegetable = useDeleteVegetable();
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <Wrapper>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.id}</p>
      {item.isPlanted ? (
        <p>planted</p>
      ) : (
        <div>
          <p>not planted</p>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
            type="date"
            id="start"
            name="trip-start"
            value={value}
            min="2022-10-01"
            max="2022-12-31"></input>
          <button>Plant</button>
        </div>
      )}
      <p>{item.isPlanted}</p>
      <button
        onClick={() => { deleteVegetable(item.id); }
        }>X</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: solid black 1px;
`;
