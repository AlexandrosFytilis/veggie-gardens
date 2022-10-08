import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home.js";
import { Login } from "./pages/login/Login.js";
import { SignUp } from "./pages/signup/SignUp.js";
import GlobalStyles from "./GlobalStyles.js";
import { Search } from "./pages/Search/Search.js";
import { Information } from "./pages/Information/Information.js";
import { Profile } from "./pages/Profile/Profile.js";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:item" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
