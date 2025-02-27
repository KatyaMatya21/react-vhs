import {Menu} from "./Menu.jsx";
import {getDishesByRestaurantId} from "../../services/getDishesByRestaurantId.js";

export const MenuContainer = async ({ restaurantId }) => {
  const dishes = await getDishesByRestaurantId(restaurantId);

  if (!dishes.length) {
    return null;
  }

  return (
    <Menu dishes={dishes} />
  );
};
