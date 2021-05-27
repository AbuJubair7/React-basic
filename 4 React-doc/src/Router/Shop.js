import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./router.module.css";

export default function Shop() {
  const [items, setItems] = useState([]);
  const ref = React.useRef();
  let date = new Date().toLocaleTimeString("bd-bd");
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );

    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
    ref.current.style.display = "none";
  };

  const itemNames = items.map((item) => {
    return (
      <Link className={style.productName} to={`/shop/${item.itemId}/${date}`}>
        <div className={style.card}>
          <div>
            <img src={item.item.images.icon}></img>
          </div>
          <div className={style.description}>
            <h3 className={style.productName}>{item.item.name}</h3>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <h1 ref={ref} id="loading">
        Loading....
      </h1>
      <div className={style.cardContainer}>{itemNames}</div>
    </div>
  );
}
