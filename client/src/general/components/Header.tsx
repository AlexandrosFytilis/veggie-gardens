import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../contexts/CurrenUserProvider";

export const Header = () => {
  const { currentUser, persistCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Container>
        <StyledLink to={"/search"}>
          <h2>Wiki</h2>
        </StyledLink>
        <Seperation>-</Seperation>
        <StyledLink to={"/"}>
          <Title>Veggie Gardens</Title>
        </StyledLink>
      </Container>
      <UserContainer>
        <h3>
          <StyledLink to={"/profile"}>
            {currentUser.userName}
          </StyledLink>
        </h3>
        <LogoutButton
          onClick={() => {
            persistCurrentUser(null);
            navigate("/login");
          }}
        >
          Logout
        </LogoutButton>
      </UserContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  z-index: 2;

  height: 5vh;
  background: green;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;

  position: sticky;
  top: 0px;
`;

const Container = styled.div`
  display: flex;
`;

const LogoutButton = styled.button`
  margin: 0 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Seperation = styled.h2`
  margin: 0 30px;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

