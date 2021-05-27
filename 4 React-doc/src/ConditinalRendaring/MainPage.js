import React, { useState, useEffect } from "react";

export default function MainPage({ match }) {
  const [data, setData] = useState({});

  const [post, setPost] = useState(["First post"]);
  const email = `jubair7@gmail.com`;
  const password = `1234`;
  const error = "Error id or password";

  const card = {
    width: "500px",
    padding: "15px",
    backgroundColor: "orange",
    color: "white",
    margin: "0 auto",
    marginTop: "5px",
  };

  const button = {
    position: "fixed",
    top: "10px",
    left: "10px",
  };
  const text = {
    position: "fixed",
    top: "30px",
    left: "10px",
  };

  useEffect(() => {
    if (match.params.email == email && match.params.password == password) {
      setData(match.params);
    } else {
      setData(error);
    }
  });
  const loadComponent = () => {
    let component = <h1>{error}</h1>;

    if (data != error) {
      let list = post.map((p, index) => {
        return (
          <div style={card}>
            <h1 key={index}>{p}</h1>
          </div>
        );
      });
      list.push(
        <button onClick={addPost} style={button}>
          Add post
        </button>
      );
      list.push(<input id="post" style={text} type="text"></input>);
      return list;
    }

    return component;
  };

  const addPost = () => {
    let text = document.getElementById("post").value;
    if (text != "") {
      setPost([...post, text]);
    }
  };
  return <div>{loadComponent()}</div>;
}
