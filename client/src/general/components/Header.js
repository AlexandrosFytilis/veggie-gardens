import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../contexts/CurrenUserProvider.js";

export const Header = () => {
  const { currentUser, persistCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <p>Welcome {currentUser.userName}</p>
      <Link to={"/"}>
        <p>Logo</p>
      </Link>
      <Link to={"/search"}>
        <p>Wiki</p>
      </Link>
      <button
        onClick={() => {
          persistCurrentUser(null);
          navigate("/login");
        }}
      >
        Logout
      </button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 5vh;
  background: green;

  display: flex;
  justify-content: space-between;
`;
