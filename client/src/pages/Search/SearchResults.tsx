import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../general/utils/colors";

export const SearchResult = ({ item }) => {

  return (
    <StyledLink to={`/${item.name}`}>
      <Wrapper>
        <Image src={item.img}></Image>
        <h2>{item.name}</h2>
      </Wrapper>
    </StyledLink>

  );
};

const Wrapper = styled.div`
  display: flex;
  border-bottom: solid 1px black;
  padding: 10px;
  background: ${COLORS.primaryColor};

  &:hover {
    background: ${COLORS.tertiaryColor};
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border: solid black 1px;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

