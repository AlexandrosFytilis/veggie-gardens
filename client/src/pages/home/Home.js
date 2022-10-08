import React from "react";
import styled from "styled-components";
import { SideBar } from "./components/Sidebar.js";
import { VegetableFeed } from "./components/VegetableFeed.js";

export const Home = () => {
  return (
    <Wrapper>
      <HomeContainer>
        <SideBar />
        <VegetableFeed />
      </HomeContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: blue;

  display: flex;
  flex-direction: column;
`;

const HomeContainer = styled.div`
  display: flex;
`;
