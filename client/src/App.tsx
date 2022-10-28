import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import GlobalStyles from "./GlobalStyles";
import SecuredApp from "./SecuredApp";

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
