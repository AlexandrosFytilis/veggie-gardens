import React, { useContext, useState } from "react";
import { DropDownOption } from "./DropDownOption.js";
import { vegetableData } from "../../../general/utils/vegatableData.js";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider.js";

export const Dropdown = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState("");

  // const reset = () => {
  //   setSelected(false);
  //   setValue("");
  // };

  const compare = (first, second) => {
    const isFirstInFavoriteVegetables = currentUser.favoriteVegetables.includes(first.name);
    const isSecondInFavoriteVegetables = currentUser.favoriteVegetables.includes(second.name);

    if (isFirstInFavoriteVegetables === isSecondInFavoriteVegetables) {
      return 0;
    }
    if (isFirstInFavoriteVegetables) {
      return -1;
    }
    return 1;
  };

  return (
    <div>
      <div>
        <div>Search:</div>
        <input
          value={value}
          placeholder="Add a Vegetable"
          onFocus={() => setSelected(true)}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
      {selected &&
        <div>
          {vegetableData
            .filter((item) => item.name.toLowerCase() .includes(value.toLowerCase()))
            .sort(compare)
            .map((item, index) => (
              index < 10 &&
              <div key={index}>
                <DropDownOption item={item} />
              </div>
            ))}
        </div>
      }
    </div>
  );
};
