import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../general/providers/CurrenUserProvider.js";

export const Home = () => {
  const { currenUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currenUser === null) {
      navigate("/login");
    }
  }, [currenUser, navigate]);

  return currenUser && (
    <div>
      <p>{currenUser.firstName}</p>
      <p>{currenUser.lastName}</p>
    </div>
  );
};
