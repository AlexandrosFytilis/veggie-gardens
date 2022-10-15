import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import CurrentUserProvider from "./general/contexts/CurrenUserProvider";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </React.StrictMode>
  );
}
