import React, { useState } from "react";
import style from "./form-style.module.css";

export default function FORM() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  function onSubmit(e) {
    console.log(user);
    e.preventDefault();
    let loadingDiv = document.getElementById("loading");
    loadingDiv.style.display = "block";
    setTimeout(() => {
      loadingDiv.style.display = "none";
      alert(`Name: ${user.name}\nEmail: ${user.email}`);
    }, 2000);
  }

  function onChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div className={style.formGroup}>
      <div id="loading" className={style.loadingDiv}>
        <h1>Loading...</h1>
      </div>
      <br></br>

      <fieldset>
        <legend>Login detail</legend>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={onChange}
              required
            ></input>
          </div>

          <br></br>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={onChange}
              required
            ></input>
          </div>
          <br></br>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={onChange}
              required
            ></input>
          </div>
          <br></br>
          <input type="submit" value="Register"></input>
        </form>
      </fieldset>
    </div>
  );
}
