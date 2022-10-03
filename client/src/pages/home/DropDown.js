import React, { useState } from "react";
import styled from "styled-components";

export const Dropdown = () => {
  const [selected, setSelected] = useState(false);

  const itemList = [
    "Tomato",
    "Carrot",
    "Cucumber",
    "Corn",
    "Onion",
    "Potato",
    "Celery",
    "Raddish"
  ];

  const [filteredList, setFilteredList] = useState(itemList);

  const filterBySearch = (e) => {
    const query = e.target.value;
    let updatedList = [...itemList];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  return (
    <div>
      <div>
        <div>Search:</div>
        <input
          placeholder="Add a Vegetable"
          onChange={filterBySearch}
          onBlur={() => setSelected(false)}
          onFocus={() => setSelected(true)}
        />
      </div>
      {selected &&
        <div>
          {filteredList.map((item, index) => (
            <div key={index}>

              {item}

              <button
                value={item}
                onClick={(e) => {
                  // @ts-ignore
                  console.log(e.target.value);
                }}>+</button>

              <button
                value={item}
                onClick={() => {
                  console.log(`Information about ${item}`);
                }}>i</button>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

const Wrapper = styled.div`
 
`;
