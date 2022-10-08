import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./pages/home/Home.js";
import { Search } from "./pages/search/Search.js";
import { Information } from "./pages/Information/Information.js";
import { Profile } from "./pages/profile/Profile.js";
import { Header } from "./general/components/Header.js";
import { CurrentUserContext } from "./general/contexts/CurrenUserProvider.js";

const App = () => {
  const { email, currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (email === null) {
      navigate("/login");
    }
  }, [email, navigate]);

  return currentUser && (
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
