import React, { useState } from "react";
import styled from "styled-components";
import { DropDownOption } from "./DropDownOption.js";
import { vegetableData } from "../../general/utils/vegatableData.js";

export const Dropdown = () => {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState("");

  const itemList = vegetableData.map((element) => element.name);

  const [filteredList, setFilteredList] = useState(itemList);

  const filterBySearch = (e) => {
    const query = e.target.value;
    let updatedList = [...itemList];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  const reset = () => {
    setSelected(false);
    setValue("");
    setFilteredList(itemList);
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
            filterBySearch(e);
          }}
        />
      </div>
      {selected &&
        <div>
          {filteredList.map((item, index) => (
            <div key={index}>
              <DropDownOption item={item} reset={reset}/>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

const Wrapper = styled.div`
 
`;
