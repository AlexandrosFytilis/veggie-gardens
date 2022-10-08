import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home.js";
import { Search } from "./pages/search/Search.js";
import { Information } from "./pages/Information/Information.js";
import { Profile } from "./pages/profile/Profile.js";
import { Header } from "./general/components/Header.js";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:item" element={<Information />} />
      </Routes>
    </>
    
  );
};

export default App;
