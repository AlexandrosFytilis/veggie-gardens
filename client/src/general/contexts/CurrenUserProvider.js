import React, { useState, createContext } from "react";

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [selectedGardenVegetables, setSelectedGardenVegetables] = useState([]);
  const [currenUser, setCurrentUser] = useState(
    JSON.parse(window.localStorage.getItem("currenUser"))
  );

  const persistCurrentUser = (user) => {
    setCurrentUser(user);
    if (user === null) {
      window.localStorage.removeItem("currenUser");
    } else {
      window.localStorage.setItem("currenUser", JSON.stringify(user));
    }
  };

  return (
    <CurrentUserContext.Provider value={{ currenUser, persistCurrentUser, selectedGardenVegetables, setSelectedGardenVegetables }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
