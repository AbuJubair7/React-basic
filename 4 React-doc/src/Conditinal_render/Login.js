import React from "react";

export default function Login() {
  showAlert();
  return (
    <div style={{ backgroundColor: "black", padding: "10px" }}>
      <h1 style={{ color: "green" }}>
        Hello you are in Login page depanding on launcher state
      </h1>
    </div>
  );
}

function showAlert() {
  alert("Loged in");
}
