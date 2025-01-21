import { restaurants } from "../../mock.js";
import { useState } from "react";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs.jsx";
import { RestaurantInfo } from "../restaurantInfo/RestaurantInfo.jsx";

export const Restaurants = () => {
  // ? maybe save id instead of whole restaurant object ?
  const [restaurantActive, setRestaurantActive] = useState(restaurants[0]);

  const onRestaurantChange = (id) => {
    setRestaurantActive(() => {
      return restaurants.find((restaurant) => restaurant.id === id);
    });
  };

  return (
    <>
      <RestaurantTabs activeRestaurantId={restaurantActive.id} onRestaurantChange={onRestaurantChange} restaurants={restaurants} />
      <RestaurantInfo restaurant={restaurantActive} />
    </>
  );
};
