import React, { useState, createContext, useCallback, useEffect } from "react";

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [vegetables, setVegetables] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(window.localStorage.getItem("currentUser"))
  );

  const persistCurrentUser = (user) => {
    setCurrentUser(user);
    if (user === null) {
      window.localStorage.removeItem("currentUser");
    } else {
      window.localStorage.setItem("currentUser", JSON.stringify(user));
    }
  };

  const fetchVegetables = useCallback(async () => {
    let response = null;
    if (currentUser !== null) {
      response = await fetch(`/users/${currentUser.email}`);
    }

    if (response === null) {
      return;
    }

    if (!response.ok) {
      const json = await response.json();
      alert(json.message);
      return;
    }
    const json = await response.json();
    setVegetables(json.data.vegetables);
  }, [currentUser]);

  useEffect(() => {
    fetchVegetables();
  }, [fetchVegetables]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, persistCurrentUser, vegetables, fetchVegetables }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
