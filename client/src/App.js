import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./components/Home";
import { Login } from "./components/registration/Login";
import { SignUp } from "./components/registration/SignUp";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
