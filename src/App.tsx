import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CreateAccountPage } from "./pages/CreateAccountPage";
import { Navbar } from "./components/shared/Navbar";
import React from "react";
import { Footer } from "./components/shared/Footer";
import { Login } from "./pages/Login";
import { ContactUs } from "./pages/ContactUs";

export const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/account" element={<CreateAccountPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
