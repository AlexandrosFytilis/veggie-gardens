import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { Dropdown } from "./DropDown.js";

export const SideBar = () => {
  const { currenUser } = useContext(CurrentUserContext);

  return (
    <Wrapper>
      <Dropdown />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: gray;
  width: 20vw;
  min-height: 95vh;
`;
