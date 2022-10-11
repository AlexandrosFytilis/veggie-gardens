import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../../../general/contexts/CurrenUserProvider.js";
import { COLORS } from "../../../general/utils/colors.js";
import { useAddVegetable } from "../hooks/useAddVegetable.js";

export const DropDownOption = ({ item }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const addVegetable = useAddVegetable();
  const navigate = useNavigate();

  return currentUser.favoriteVegetables.includes(item.name) ? (
    <SpecialWrapper>
      <ItemContainer>
        <Image src={item.img}></Image>
        <Text>{item.name}</Text>
      </ItemContainer>
      <ButtonContainer>
        <Button
          onClick={() => {
            addVegetable(item);
          }}>+</Button>
        <Button
          onClick={() => {
            navigate(`/${item.name}`);
          }}>i</Button>
      </ButtonContainer>
    </SpecialWrapper>
  ) : (
    <Wrapper>
      <ItemContainer>
        <Image src={item.img}></Image>
        <Text>{item.name}</Text>
      </ItemContainer>
      <ButtonContainer>
        <Button
          onClick={() => {
            addVegetable(item);
          }}>+</Button>
        <Button
          onClick={() => {
            navigate(`/${item.name}`);
          }}>i</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: blue;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content:space-between;

  padding: 8px 5px;

  border-bottom: solid 2px black;
  border-right: solid 2px black;
  border-left: solid 2px black;

  background: ${COLORS.primaryColor};
`;

const SpecialWrapper = styled.div`
  background: red;

  display: flex;
  align-items: center;
  justify-content:space-between;

  padding: 8px 5px;

  border-bottom: solid 2px black;
  border-right: solid 2px black;
  border-left: solid 2px black;

  background: lime;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;

  border: solid 2px black;
  border-radius: 100px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  padding-left: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid black;
  border-radius: 100px;

  padding: 15px;

  margin: 0 2px;

  width: 30px;
  height: 30px;

  &:hover {
    background-color: ${COLORS.tertiaryColor};
    color: ${COLORS.darkPrimaryColor};
  }
`;
