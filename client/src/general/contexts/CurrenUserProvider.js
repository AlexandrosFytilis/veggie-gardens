import React, { useState, createContext, useCallback, useEffect } from "react";
export const CurrentUserContext = createContext(null);
const CurrentUserProvider = ({ children }) => {
    const [email, setEmail] = useState(window.localStorage.getItem("currentUser"));
    const [currentUser, setCurrentUser] = useState(null);
    const persistCurrentUser = (user) => {
        setCurrentUser(user);
        if (user === null) {
            window.localStorage.removeItem("currentUser");
            setEmail(null);
        }
        else {
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
    return (React.createElement(CurrentUserContext.Provider, { value: { currentUser, persistCurrentUser, vegetables: currentUser?.vegetables, fetchCurrentUser, email } }, children));
};
export default CurrentUserProvider;
