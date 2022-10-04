import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";
import { Dropdown } from "./DropDown.js";
import useNewGarden from "./hooks/useNewGarden.js";

export const SideBar = () => {
  const { currenUser } = useContext(CurrentUserContext);
  const newGarden = useNewGarden();

  return (
    <Wrapper>
      {currenUser.gardens.length > 0 ? (
        <Dropdown />
      ) : (
        <button
          onClick={() => newGarden()}
        >New Garden
        </button>
      )}

    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: gray;
  width: 20vw;
  min-height: 95vh;
`;
