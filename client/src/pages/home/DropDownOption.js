import React, { useContext } from "react";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";

export const CropDownOption = ({ item, reset }) => {
  const { setSelectedGardenVegetables } = useContext(CurrentUserContext);

  return (
    <>
      {item}
      <button
        value={item}
        onClick={(e) => {
          // @ts-ignore
          console.log(e.target.value);
          // @ts-ignore
          setSelectedGardenVegetables((current) => [...current, e.target.value]);
        }}> +</button>
      <button
        value={item}
        onClick={() => {
          console.log(`Information about ${item}`);
          reset();
        }}>i</button>
    </>
  );
};
