import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import CurrentUserProvider from "./general/contexts/CurrenUserProvider";
const root = createRoot(document.getElementById("root"));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(CurrentUserProvider, null,
        React.createElement(App, null))));
