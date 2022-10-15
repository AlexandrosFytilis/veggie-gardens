import React, { useContext, useState } from "react";
import { DropDownOption } from "./DropDownOption";
import { vegetableData } from "../../../general/utils/vegatableData";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider";
import styled from "styled-components";
import { Vegetable } from "../../../domain/Vegetable";

export const Dropdown = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState("");

  const compare = (first: Vegetable, second: Vegetable) => {
    const isFirstInFavoriteVegetables = currentUser?.favoriteVegetables.includes(first.name);
    const isSecondInFavoriteVegetables = currentUser?.favoriteVegetables.includes(second.name);

    if (isFirstInFavoriteVegetables === isSecondInFavoriteVegetables) {
      return 0;
    }
    if (isFirstInFavoriteVegetables) {
      return -1;
    }
    return 1;
  };

  return (
    <Wrapper>
      <InputContainer>
        {value.length > 0 && (
          <ClearButton
            onClick={() => setValue("")}
          >
            X
          </ClearButton>
        )}

        <Input
          value={value}
          placeholder="Add a Vegetable"
          onFocus={() => setSelected(true)}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </InputContainer>
      {
        selected &&
        <div>
          {vegetableData
            .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
            .sort(compare)
            .map((item, index) => (
              index < 10 &&
              <div key={index}>
                <DropDownOption item={item} />
              </div>
            ))}
          <CloseButton
            onClick={() => setSelected(false)}
          >
            ^
          </CloseButton>
        </div>

      }
    </Wrapper >
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  box-sizing: border-box;
  top: 70px;
`;

const InputContainer = styled.div`
  position: relative;
`;

const ClearButton = styled.button`
  position: absolute;
  top: 11px;

  background: none;
  border: none;

  color: gray;
  border-right: solid 2px gray;

  font-size: 20px;
`;

const Input = styled.input`
  padding-left: 35px;
  width: 85%;

  border: solid 2px black;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 25px;

  padding-top: 10px;
  border: solid 2px black;
`;
