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
