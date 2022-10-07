import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../../general/components/Header.js";
import { vegetableData } from "../../general/utils/vegatableData.js";
import { SearchResult } from "./SearchResults.js";

export const Search = () => {
  const [value, setValue] = useState("");

  const reset = () => {
    setValue("");
  };

  return (
    <Wrapper>
      <Header />
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
              <button
                onClick={() => reset()}
              >
                Reset
              </button>
            }
          </div>
        </DropDownContainer>
        <Block />
      </SearchContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  max-width: 100vw;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
`;

const Block = styled.div`
  background: gray;
  width: 20%;
  min-height: 95vh;
`;

const InputConainer = styled.div`
  
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

const DropDownContainer = styled.div`
  width: 60%;
`;
