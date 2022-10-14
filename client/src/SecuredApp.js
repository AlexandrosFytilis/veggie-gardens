import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { Information } from "./pages/Information/Information";
import { Profile } from "./pages/profile/Profile";
import { Header } from "./general/components/Header";
import { CurrentUserContext } from "./general/contexts/CurrenUserProvider";
const App = () => {
    const { email, currentUser } = useContext(CurrentUserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (email === null) {
            navigate("/login");
        }
    }, [email, navigate]);
    return currentUser && (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/profile", element: React.createElement(Profile, null) }),
            React.createElement(Route, { path: "/search", element: React.createElement(Search, null) }),
            React.createElement(Route, { path: "/:item", element: React.createElement(Information, null) }))));
};
export default App;
