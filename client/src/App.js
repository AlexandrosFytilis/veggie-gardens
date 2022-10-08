import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login.js";
import { SignUp } from "./pages/signup/SignUp.js";
import GlobalStyles from "./GlobalStyles.js";
import SecuredApp from "./SecuredApp.js";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<SecuredApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
