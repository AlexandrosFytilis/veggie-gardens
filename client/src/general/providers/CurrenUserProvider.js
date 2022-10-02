import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [currenUser, setCurrentUser] = useState(window.localStorage.getItem("currenUser"));

  return (
    <CurrentUserContext.Provider value={{ currenUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

CurrentUserProvider.propTypes = {
  children: PropTypes
};

export default CurrentUserProvider;
