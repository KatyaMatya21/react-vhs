import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { RestaurantTabsButton } from "./RestaurantTabsButton.jsx";
import { NavLink } from "react-router";

export const RestaurantTabsButtonContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name } = restaurant || {};

  if (!name) {
    return null;
  }

  return (
    <NavLink
      to={`/restaurants/${id}`}
    >
      {({ isActive }) => <RestaurantTabsButton active={isActive} name={name} />}
    </NavLink>
  );
};
