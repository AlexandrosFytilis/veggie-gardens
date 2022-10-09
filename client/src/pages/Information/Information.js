import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { useAddFavoriteVegetable } from "../../general/hooks/useAddFavoriteVegetable.js";
import { useDeleteFavoriteVegetable } from "../../general/hooks/useDeleteFavoriteVegetable.js";
import { vegetableData } from "../../general/utils/vegatableData.js";

export const Information = () => {
  const { currentUser } = useContext(CurrentUserContext);

  const { item } = useParams();
  const itemInfo = vegetableData.find((searchedItem) => searchedItem.name === item);
  const addFavoriteVegetable = useAddFavoriteVegetable();
  const deleteFavoriteVegetable = useDeleteFavoriteVegetable();

  return (
    <InformationContainer>
      <Image src={itemInfo.img}></Image>
      <div>
        <h2>{itemInfo.name}</h2>
        <p>{itemInfo.description}</p>
        <p>Average growth time: {itemInfo.growth} days</p>
        <p>Average time before first harvest: {itemInfo.harvest} Days</p>
      </div>
      {!currentUser.favoriteVegetables.includes(itemInfo.name) ? (
        <button
          onClick={() => addFavoriteVegetable(itemInfo.name)}
        >
          Favorite
        </button>
      ) : (
        <button
          onClick={() => deleteFavoriteVegetable(itemInfo.name)}
        >
          Remove from Favorites
        </button>
      )}
    </InformationContainer>
  );
};
const InformationContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;

  margin-right: 15px;

  border: solid 3px black;
`;

