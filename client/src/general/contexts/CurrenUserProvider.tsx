import React, { useState, createContext, useCallback, useEffect, ReactNode } from "react";
import { User } from "../../domain/User";
import { Vegetable } from "../../domain/Vegetable";

interface CurrentUserContextProps {
  currentUser: User | null,
  persistCurrentUser: (user: User | null) => void,
  vegetables?: Vegetable[],
  fetchCurrentUser: () => void,
  email: string | null,
}

export const CurrentUserContext = createContext<CurrentUserContextProps>({
  currentUser: null,
  persistCurrentUser: () => undefined,
  fetchCurrentUser: () => undefined,
  email: null,
});

interface Props {
  children: ReactNode
}

const CurrentUserProvider = ({ children }: Props) => {
  const [email, setEmail] = useState(window.localStorage.getItem("currentUser"));
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const persistCurrentUser = (user: User | null) => {
    setCurrentUser(user);
    if (user === null) {
      window.localStorage.removeItem("currentUser");
      setEmail(null);
    } else {
      window.localStorage.setItem("currentUser", user.email);
      setEmail(user.email);
    }
  };

  const fetchCurrentUser = useCallback(async () => {
    if (!email) {
      return;
    }

    const response = await fetch(`/users/${email}`);

    if (!response.ok) {
      const json = await response.json();
      alert(json.message);
      return;
    }

    const json = await response.json();
    setCurrentUser(json.data);
  }, [email]);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, persistCurrentUser, vegetables: currentUser?.vegetables, fetchCurrentUser, email }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
