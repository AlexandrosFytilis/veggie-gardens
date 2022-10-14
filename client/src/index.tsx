import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import CurrentUserProvider from "./general/contexts/CurrenUserProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>
);
