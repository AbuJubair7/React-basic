import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <div>
      <nav>
        <Link to="/" style={linkStyle}>
          <h1>
            <b>Logo</b>
          </h1>
        </Link>
        <ul>
          <Link to="/shop" style={linkStyle}>
            <li to="/shop">Shop</li>
          </Link>

          <Link to="/about" style={linkStyle}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
