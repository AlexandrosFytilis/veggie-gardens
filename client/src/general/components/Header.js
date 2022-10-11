import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../contexts/CurrenUserProvider.js";

export const Header = () => {
  const { currentUser, persistCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledLink to={"/search"}>
        <h2>Wiki</h2>
      </StyledLink>
      <StyledLink to={"/"}>
        <Title>Veggie Gardens</Title>
      </StyledLink>
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

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

