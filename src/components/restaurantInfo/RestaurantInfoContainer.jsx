import {getRestaurants} from "../../services/getRestaurants.js";
import {RestaurantInfo} from "./RestaurantInfo.jsx";

export const RestaurantInfoContainer = async ({ id, children }) => {
  const restaurants = await getRestaurants();

  const restaurant = restaurants.find(
    ({ id: restaurantId }) => restaurantId === id
  );

  if (!restaurant) {
    return null;
  }

  return (
    <RestaurantInfo restaurant={restaurant}>
      {children}
    </RestaurantInfo>
  );
};
