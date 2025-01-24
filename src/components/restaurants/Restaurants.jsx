import { useState } from "react";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs.jsx";
import { RestaurantInfo } from "../restaurantInfo/RestaurantInfo.jsx";
import { ReviewForm } from "../reviewForm/ReviewForm.jsx";

export const Restaurants = ({ restaurants }) => {
  const [restaurantActiveId, setRestaurantActiveId] = useState(restaurants[0].id);

  const getRestaurant = (id) => {
    return restaurants.find((restaurant) => restaurant.id === id);
  };

  const onRestaurantChange = (id) => {
      setRestaurantActiveId(id);
  };

  const foundRestaurant = getRestaurant(restaurantActiveId);

  return (
    <>
      <RestaurantTabs activeRestaurantId={restaurantActiveId} onRestaurantChange={onRestaurantChange} restaurants={restaurants} />
      {restaurantActiveId && foundRestaurant && <RestaurantInfo restaurant={foundRestaurant} />}

      <ReviewForm />
    </>
  );
};
