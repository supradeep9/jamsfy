import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "./loginSlice";
import firebaseDb from "./firebase";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(0);
  function handleCallbakResponse(response) {
    var userObj = jwt_decode(response.credential);
    var dataAdded = firebaseDb.child("Login").push(userObj, (err) => {
      if (err) {
        console.log(err);
      }
    });
    setUser({ name: userObj.name });
    dispatch(signIn(userObj));

    navigate("/dashboard");
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "627179710886-g5i69aeh7ctivru94pvp4dfpdvt5c49j.apps.googleusercontent.com",
      callback: handleCallbakResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="app">
      {user === 0 && <div id="signInDiv"></div>}
      {user !== 0 && <h1>{user.name} </h1>}
    </div>
  );
};

export default Login;
