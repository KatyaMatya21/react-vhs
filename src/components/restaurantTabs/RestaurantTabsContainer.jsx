import {getRestaurants} from "../../services/getRestaurants.js";
import {RestaurantTabs} from "./RestaurantTabs.jsx";

export const RestaurantTabsContainer = async () => {
  const restaurants = await getRestaurants();

  if (!restaurants.length) {
    return null;
  }

  return <RestaurantTabs restaurants={restaurants} />;
};
