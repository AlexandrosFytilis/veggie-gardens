import React, { useState, createContext, useCallback, useEffect } from "react";

export const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
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

  const fetchCurrentUser = useCallback(async () => {
    if (!currentUser || !currentUser.email) {
      return;
    }

    const response = await fetch(`/users/${currentUser.email}`);

    if (!response.ok) {
      const json = await response.json();
      alert(json.message);
      return;
    }
    const json = await response.json();
    setCurrentUser(json.data);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser.email]);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, persistCurrentUser, vegetables: currentUser.vegetables, fetchCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
