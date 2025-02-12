import { useParams } from "react-router";
import { RestaurantInfo } from "../components/restaurantInfo/RestaurantInfo.jsx";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return <RestaurantInfo restaurantId={restaurantId} />;
};
