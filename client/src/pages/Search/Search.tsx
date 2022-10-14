import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../general/utils/colors";
import { vegetableData } from "../../general/utils/vegatableData";
import { SearchResult } from "./SearchResults";

export const Search = () => {
  const [value, setValue] = useState("");

  const reset = () => {
    setValue("");
  };

  return (
    <SearchContainer>
      <Block />
      <DropDownContainer>
        <InputConainer>
          <Input
            value={value}
            placeholder="Search a Vegetable"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </InputConainer>
        <div>
          {vegetableData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())).map((item, index) => (
            <div key={index}>
              <SearchResult item={item}/>
            </div>
          ))}
          {value.length > 0 && 
              <ClearButton
                onClick={() => reset()}
              >
                v
              </ClearButton>
          }
        </div>
      </DropDownContainer>
      <Block />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  background: ${COLORS.darkPrimaryColor};
`;

const Block = styled.div`
  background: gray;
  width: 20%;
  min-height: 95vh;
  background: ${COLORS.darkPrimaryColor};
`;

const InputConainer = styled.div`
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: solid 2px ${COLORS.tertiaryColor};
`;

const DropDownContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-content: center;

  border-right: solid 3px ${COLORS.secondaryColor};
  border-left: solid 3px ${COLORS.secondaryColor};
`;

const ClearButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;

  width: 100%;
  border: solid 2px ${COLORS.darkPrimaryColor};
`;
