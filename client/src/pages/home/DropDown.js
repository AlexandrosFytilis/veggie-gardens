import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";

export const Dropdown = () => {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState("");
  const { selectedGardenVegetables, setSelectedGardenVegetables } = useContext(CurrentUserContext);

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

  const dataList = [
    {
      name: "Tomato",
      description: "This is a Tomato"
    },
    {
      name: "Carrot",
      description: "This is a Carrot"
    },
    {
      name: "Cucumber",
      description: "This is a Cucumber"
    },
  ];

  console.log(selectedGardenVegetables);

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
              {item}
              <button
                value={item}
                onClick={(e) => {
                  // @ts-ignore
                  console.log(e.target.value);
                  // @ts-ignore
                  setSelectedGardenVegetables((current) => [...current, e.target.value]);
                }}>+</button>
              <button
                value={item}
                onClick={() => {
                  console.log(`Information about ${item}`);
                  reset();
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
