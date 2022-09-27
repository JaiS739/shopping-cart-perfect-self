import React from "react";
import { Route, Routes } from "react-router";
import Cart from "../pages/Cart";
import Navbar from "../pages/Navbar";
import Products from "../pages/Products";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
