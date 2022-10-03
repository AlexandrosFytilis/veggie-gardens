import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../general/components/Header.js";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { SideBar } from "./Sidebar.js";

export const Home = () => {
  const { currenUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currenUser === null) {
      navigate("/login");
    }
  }, [currenUser, navigate]);

  return currenUser && (
    <Wrapper>
      <Header />
      <HomeContainer>
        <SideBar />
        <p>Home</p>
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
