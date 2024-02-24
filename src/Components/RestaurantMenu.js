import React from "react";
import ShimmerUI from "./ShimmerUI";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();

  if (resInfo === null) return <ShimmerUI />;

  const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Menu items</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
