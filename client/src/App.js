import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import GlobalStyles from "./GlobalStyles";
import SecuredApp from "./SecuredApp";
const App = () => {
    return (React.createElement(BrowserRouter, null,
        React.createElement(GlobalStyles, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/login", element: React.createElement(Login, null) }),
            React.createElement(Route, { path: "/signup", element: React.createElement(SignUp, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(SecuredApp, null) }))));
};
export default App;
