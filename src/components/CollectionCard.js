import React from "react";
import weth from "../assets/weth.png";
import "./CollectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collection__card">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name} <div className="id"> •#{id}</div>
        </div>

        <div className="price__container">
          <img src={weth} className="weth__image" alt="" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
