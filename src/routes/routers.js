import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home";
import All from "../pages/all";
//import AllDetails from "../pages/allDetails";
import Foods from "../pages/foods";
//import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/cart";
import Logout from "../pages/logout";
import Contact from "../pages/contact";
import Login from "../pages/login";
import Register from "../pages/register";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/all" element={<All />} />
      {/* <Route exact path="/allDetails/:id" element={<AllDetails />} /> */}
      <Route exact path="/foods/:id" element={<Foods />} />
      {/* <Route exact path="/foodDetails/:id" element={<FoodDetails />} /> */}
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/logout" element={<Logout />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
