import React, { useState, createContext } from "react";

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
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
    <CurrentUserContext.Provider value={{ currenUser, persistCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
