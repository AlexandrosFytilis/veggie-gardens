import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchResult = ({ item }) => {

  return (
    <Link to={`/${item.name}`}>
      <Wrapper>
        <Image src={item.img}></Image>
        <h2>{item.name}</h2>
      </Wrapper>
    </Link>

  );
};

const Wrapper = styled.div`
  display: flex;
  border-bottom: solid 1px black;
  padding: 10px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border: solid black 1px;
  margin-right: 10px;
`;

