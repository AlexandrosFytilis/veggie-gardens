import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { SideBar } from "./components/Sidebar.js";
import { VegetableFeed } from "./components/VegetableFeed.js";

export const Home = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === null) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return currentUser && (
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
