import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";

import Navbar from "./my-components/Navbar";
import Footer from "./my-components/Footer";
import HomePage from "./HomePage";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
