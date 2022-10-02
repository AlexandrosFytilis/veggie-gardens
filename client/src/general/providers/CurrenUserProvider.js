import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [currenUser, setCurrentUser] = useState(window.localStorage.getItem("currenUser"));

  const persistCurrentUser = (user) => {
    setCurrentUser(user);
    window.localStorage.setItem("currenUser", user);
  };

  return (
    <CurrentUserContext.Provider value={{ currenUser, persistCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

CurrentUserProvider.propTypes = {
  children: PropTypes.node
};

export default CurrentUserProvider;
