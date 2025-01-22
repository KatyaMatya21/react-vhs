import { useState } from "react";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs.jsx";
import { RestaurantInfo } from "../restaurantInfo/RestaurantInfo.jsx";

export const Restaurants = ({ restaurants }) => {
  const [restaurantActive, setRestaurantActive] = useState(restaurants[0].id);

  const getRestaurant = (id) => {
    return restaurants.find((restaurant) => restaurant.id === id);
  };

  const onRestaurantChange = (id) => {
    const foundRestaurant = getRestaurant(id);
    if (foundRestaurant) {
      setRestaurantActive(() => {
        return foundRestaurant.id;
      });
    } else {
      console.error("Restaurant not found");
    }
  };

  const foundRestaurant = getRestaurant(restaurantActive);

  return (
    <>
      <RestaurantTabs activeRestaurantId={restaurantActive} onRestaurantChange={onRestaurantChange} restaurants={restaurants} />
      {restaurantActive && foundRestaurant && <RestaurantInfo restaurant={foundRestaurant} />}
    </>
  );
};
