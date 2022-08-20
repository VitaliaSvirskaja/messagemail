import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { CreateAccount } from "./CreateAccount";
import { Navbar } from "./components/Navbar";
import React from "react";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
};

export default App;
