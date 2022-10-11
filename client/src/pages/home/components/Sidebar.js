import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../general/utils/colors.js";
import { Dropdown } from "./DropDown.js";

export const SideBar = () => {

  return (
    <Wrapper>
      <Dropdown />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: ${COLORS.darkPrimaryColor};

  width: 20vw;
  min-height: 95vh;

  padding: 20px;
`;
