import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [state, setState] = useState();
  const id = useParams();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <button
        onClick={() =>
          axios
            .get("https://fakestoreapi.com/products/" + id)
            .then((res) => console.log(res))
        }
      >
        {" "}
        get details
      </button>
      {state && (
        <div>
          <h1>{state.title}</h1>
          <p> {state.id}</p>
          <p>{state.category}</p>
          <h4>{state.price}</h4>
        </div>
      )}
    </div>
  );
};

export default Details;
