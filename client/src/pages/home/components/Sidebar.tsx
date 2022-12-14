import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../general/utils/colors";
import { Dropdown } from "./DropDown";

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

  width: 20%;
  min-height: 95vh;

  box-sizing: border-box;

  padding: 20px;
`;
