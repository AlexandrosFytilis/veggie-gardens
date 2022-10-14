import React from "react";
import styled from "styled-components";
import { COLORS } from "../../general/utils/colors";
import { SideBar } from "./components/Sidebar";
import { VegetableFeed } from "./components/VegetableFeed";
export const Home = () => {
    return (React.createElement(Wrapper, null,
        React.createElement(HomeContainer, null,
            React.createElement(SideBar, null),
            React.createElement(VegetableFeed, null),
            React.createElement(Block, null))));
};
const Wrapper = styled.div `
  min-height: 95vh;
  background: ${COLORS.primaryColor};
  max-width: 100vw;

  display: flex;
  flex-direction: column;
`;
const HomeContainer = styled.div `
  display: flex;
  width: 100%;
`;
const Block = styled.div `
  background: gray;
  width: 20%;
  min-height: 95vh;
  background: ${COLORS.darkPrimaryColor};
`;
