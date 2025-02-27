import {RestaurantInfoLayout} from "../../../components/restaurantInfo/RestaurantInfoLayout.jsx";
import {getRestaurants} from "../../../services/getRestaurants.js";

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;

  const restaurants = await getRestaurants();

  const restaurant = restaurants.find(({ id }) => restaurantId === id);

  return {
    title: restaurant.name,
  };
};

export default RestaurantInfoLayout;
