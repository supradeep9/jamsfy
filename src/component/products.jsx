import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Cards from "./Card";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Sidebars from "../sidebars";
import { useSelector } from "react-redux";

const Products = () => {
  const [datas, setData] = useState("");
  const state = useSelector((state) => state.login);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="main">
      <div className="dashboard">
        <Sidebars />
      </div>
      <div className="pgrid">
        <Grid container spacing={3}>
          {datas &&
            datas.map((item) => (
              <Grid item key={item.id} xs={12} sm={4}>
                <Cards key={item.id} data={item} />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default Products;
