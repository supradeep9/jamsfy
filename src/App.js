import React from "react";
import Data from "./data";
import Products from "./component/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./create";
import Update from "./update";
import "./App.css";
import CartDetails from "./cartDetails";
import Login from "./login";

import Details from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Data />} />
        <Route path="/create" element={<Create />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/signout" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
