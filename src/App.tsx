import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CreateAccountPage } from "./pages/CreateAccountPage";
import { Navbar } from "./components/shared/Navbar";
import React from "react";
import { Footer } from "./components/shared/Footer";

export const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/account" element={<CreateAccountPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
};

export default App;
