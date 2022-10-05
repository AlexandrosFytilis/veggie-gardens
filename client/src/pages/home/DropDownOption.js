import React from "react";
import { useAddVegetable } from "./hooks/useAddVegetable.js";

export const DropDownOption = ({ item, reset }) => {
  const addVegetable = useAddVegetable();

  return (
    <>
      {item.name}
      <button
        onClick={() => {
          addVegetable(item);
        }}>+</button>
      <button
        onClick={() => {
          console.log(`Information about ${item}`);
          reset();
        }}>i</button>
    </>
  );
};
