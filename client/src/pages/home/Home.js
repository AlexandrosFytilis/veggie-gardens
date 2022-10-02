import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../general/components/Header.js";
import { CurrentUserContext } from "../../general/contexts/CurrenUserProvider.js";

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
      <Header />
      <p>Home</p>
    </div>
  );
};
