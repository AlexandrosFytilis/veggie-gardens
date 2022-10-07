import React from "react";
import { useNavigate } from "react-router-dom";
import { useAddVegetable } from "./hooks/useAddVegetable.js";

export const DropDownOption = ({ item, reset }) => {
  const addVegetable = useAddVegetable();
  const navigate = useNavigate();

  return (
    <>
      {item.name}
      <button
        onClick={() => {
          addVegetable(item);
        }}>+</button>
      <button
        onClick={() => {
          navigate(`/${item.name}`);
        }}>i</button>
    </>
  );
};
