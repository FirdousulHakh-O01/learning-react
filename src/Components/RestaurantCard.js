import React from "react";
import { resImage } from "../Utils/constants";

const RestaurantCard = ({ resDetails }) => {
  const { name, avgRating, cuisines, sla, cloudinaryImageId } =
    resDetails?.info;
  return (
    <div className="res-card">
      <img
        style={{
          width: "100%",
          height: "250px",
          borderRadius: "15px 15px 0 0",
        }}
        alt="RestaurantCard"
        src={resImage + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <div style={{ display: "flex" }}>
        <h5>{avgRating} stars</h5>
        <h5 style={{ marginLeft: "10px" }}>{sla.deliveryTime} minutes</h5>
      </div>
      <h5>{cuisines.join(", ")}</h5>
    </div>
  );
};
export default RestaurantCard;
