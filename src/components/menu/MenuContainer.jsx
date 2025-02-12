import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { Menu } from "./Menu.jsx";

export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  const { menu } = restaurant || {};

  return (
    <Menu menuIds={menu} />
  );
};
