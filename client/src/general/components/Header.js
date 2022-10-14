import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../contexts/CurrenUserProvider";
export const Header = () => {
    const { currentUser, persistCurrentUser } = useContext(CurrentUserContext);
    const navigate = useNavigate();
    return (React.createElement(StyledHeader, null,
        React.createElement(Container, null,
            React.createElement(StyledLink, { to: "/search" },
                React.createElement("h2", null, "Wiki")),
            React.createElement(Seperation, null, "-"),
            React.createElement(StyledLink, { to: "/" },
                React.createElement(Title, null, "Veggie Gardens"))),
        React.createElement(UserContainer, null,
            React.createElement("h3", null,
                React.createElement(StyledLink, { to: "/profile" }, currentUser.userName)),
            React.createElement(LogoutButton, { onClick: () => {
                    persistCurrentUser(null);
                    navigate("/login");
                } }, "Logout"))));
};
const StyledHeader = styled.header `
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
const Container = styled.div `
  display: flex;
`;
const LogoutButton = styled.button `
  margin: 0 15px;
`;
const StyledLink = styled(Link) `
  text-decoration: none;
  color: black;
`;
const Title = styled.h1 `
  font-size: 32px;
`;
const Seperation = styled.h2 `
  margin: 0 30px;
`;
const UserContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;
