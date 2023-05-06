import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebars from "./sidebars";

const Create = () => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState({
    category: "",
    title: "",
    price: "",
  });

  const { category, title, price } = { update };
  const change = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };
  const submitt = (e) => {
    e.preventDefault();
    var temp;
    axios
      .post("https://fakestoreapi.com/products", { ...update })
      .then((res) =>
        alert(
          `New Product is created with id:${res.data.id},Having Title :${res.data.title} `
        )
      );

    navigate("/dashboard");
  };
  return (
    <div className="main ">
      <div className="dashboard">
        <Sidebars />
      </div>
      <div className="inputForm">
        <input
          type="text"
          name="category"
          value={category}
          onChange={change}
          className="input4"
          placeholder="Enter Category"
        ></input>
        <input
          type="text"
          name="title"
          value={title}
          onChange={change}
          className="input4"
          placeholder="Enter Title"
        ></input>
        <input
          type="text"
          name="price"
          value={price}
          onChange={change}
          className="input4"
          placeholder="Enter Price"
        ></input>

        <button onClick={submitt} className="input5">
          Create
        </button>
      </div>
    </div>
  );
};

export default Create;
