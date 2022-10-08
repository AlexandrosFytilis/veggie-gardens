import React, { useState } from "react";
import { DropDownOption } from "./DropDownOption.js";
import { vegetableData } from "../../general/utils/vegatableData.js";

export const Dropdown = () => {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState("");

  // const reset = () => {
  //   setSelected(false);
  //   setValue("");
  // };

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
          {vegetableData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())).map((item, index) => (
            <div key={index}>
              <DropDownOption item={item} />
            </div>
          ))}
        </div>
      }
    </div>
  );
};
