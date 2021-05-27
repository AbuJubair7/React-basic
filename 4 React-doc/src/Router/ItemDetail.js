import React, { useEffect, useState } from "react";

export default function ItemDetail({ match }) {
  const [itemDetail, setItemDetail] = useState({ images: {} });
  useEffect(() => {
    getItem();
    console.log(match);
  }, []);

  const getItem = async () => {
    fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    )
      .then((result) => {
        result.json().then((data) => {
          setItemDetail(data.data.item);
          document.getElementById("loading").style.display = "none";
        });
      })
      .catch((e) => {
        document.getElementById("loading").innerHTML = "Opps! No internet";
      });
  };

  return (
    <div>
      <h1 id="loading">Loading....</h1>
      <h1>{itemDetail.name}</h1>
      <h1>
        <img src={itemDetail.images.icon}></img>
      </h1>
      <h1>Time: {match.params.date}</h1>
    </div>
  );
}
