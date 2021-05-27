import React, { useState, useEffect } from "react";

export default function Home() {
  const loginDiv = {
    margin: "0 auto",
    backgroundColor: "purple",
    color: "white",
    width: "500px",
    height: "auto",
    padding: "10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
  const loginInput = {
    padding: "5px",
    width: "400px",
    outline: "none",
  };

  const [data, setData] = useState({ email: "", password: "" });

  const onClick = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email != "" && password != "") {
      window.location = `/mainpage/${email}/${password}`;
    }
  };

  return (
    <div style={loginDiv}>
      <label for="email">Email: </label>
      <input
        style={loginInput}
        id="email"
        type="email"
        placeholder="name"
        required={true}
      ></input>
      <br></br>
      <br></br>
      <label for="password">Password: </label>
      <input
        style={loginInput}
        id="password"
        type="password"
        placeholder="password"
        required={true}
      ></input>
      <br></br>
      <br></br>

      <input onClick={onClick} id="submit" type="submit"></input>
    </div>
  );
}
