import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider";
import { useAddFavoriteVegetable } from "../../general/hooks/useAddFavoriteVegetable";
import { useDeleteFavoriteVegetable } from "../../general/hooks/useDeleteFavoriteVegetable";
import { COLORS } from "../../general/utils/colors";
import { vegetableData } from "../../general/utils/vegatableData";
export const Information = () => {
    const { currentUser } = useContext(CurrentUserContext);
    const { item } = useParams();
    const itemInfo = vegetableData.find((searchedItem) => searchedItem.name === item);
    const addFavoriteVegetable = useAddFavoriteVegetable();
    const deleteFavoriteVegetable = useDeleteFavoriteVegetable();
    return (React.createElement(Wrapper, null,
        React.createElement(Block, null),
        React.createElement(ItemInfoContainer, null,
            React.createElement(Title, null, itemInfo.name),
            React.createElement(Image, { src: itemInfo.img }),
            React.createElement(DescriptionContainer, null,
                React.createElement(Para, null,
                    "Growth time: ",
                    itemInfo.growth,
                    " days"),
                React.createElement(Para, null,
                    "Time before first harvest: ",
                    itemInfo.harvest,
                    " Days"),
                React.createElement(Para, null,
                    "Yield per plante: ",
                    itemInfo.yield),
                React.createElement(Para, null,
                    "Time before plant needs watering: ",
                    itemInfo.water,
                    " Days")),
            !currentUser.favoriteVegetables.includes(itemInfo.name) ? (React.createElement(Button, { onClick: () => addFavoriteVegetable(itemInfo.name) }, "Favorite")) : (React.createElement(Button, { onClick: () => deleteFavoriteVegetable(itemInfo.name) }, "Remove from Favorites"))),
        React.createElement(Block, null)));
};
const Wrapper = styled.div `
  display: flex;
  min-width: 100vw;

  background: ${COLORS.primaryColor};
`;
const Title = styled.h1 `
  font-size: 48px;
  margin-bottom: 10px;
`;
const Image = styled.img `
  width: 500px;
  height: 500px;

  margin-right: 15px;

  border: solid 3px black;
`;
const Para = styled.p `
  font-size: 24px;
`;
const DescriptionContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 20px 0;
`;
const Block = styled.div `
  background: gray;
  width: 20%;
  min-height: 95vh;

  background: ${COLORS.darkPrimaryColor};
`;
const ItemInfoContainer = styled.div `
  width: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 80px;
`;
const Button = styled.button `
  padding: 5px;

  &:hover {
    background: ${COLORS.darkPrimaryColor};
    color: ${COLORS.tertiaryColor};
    opacity: 100%;
  }
`;
