import React from "react";
import styled from "styled-components";
import { COLORS } from "../../general/utils/colors.js";
import { SideBar } from "./components/Sidebar.js";
import { VegetableFeed } from "./components/VegetableFeed.js";

export const Home = () => {
  return (
    <Wrapper>
      <HomeContainer>
        <SideBar />
        <VegetableFeed />
        <Block />
      </HomeContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 95vh;
  background: ${COLORS.primaryColor};
  max-width: 100vw;

  display: flex;
  flex-direction: column;
`;

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Block = styled.div`
  background: gray;
  width: 20%;
  min-height: 95vh;
  background: ${COLORS.darkPrimaryColor};
`;
