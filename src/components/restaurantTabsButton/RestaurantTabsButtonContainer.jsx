import { RestaurantTabsButton } from "./RestaurantTabsButton.jsx";
import { NavLink } from "react-router";
import { useGetRestaurantsQuery } from "../../redux/services/api/api.js";

export const RestaurantTabsButtonContainer = ({ id }) => {
  const { restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      restaurant: data?.find((restaurant) => restaurant.id === id),
    }),
  })

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
