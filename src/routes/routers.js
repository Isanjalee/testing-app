import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home";
import All from "../pages/all";
import AllDetails from "../pages/allDetails";
import Cart from "../pages/cart";
import Logout from "../pages/logout";
import Contact from "../pages/contact";
import Login from "../pages/login";
import Signup from "../pages/signup";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/all" element={<All />} />
      <Route path="/allDetails/:id" element={<AllDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
