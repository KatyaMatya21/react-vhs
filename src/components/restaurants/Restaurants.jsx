import { use } from "react";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice.js";
import { CartContainer } from "../cart/CartContainer.jsx";
import { AuthContext } from "../authContext/AuthContext.js";
import { Outlet } from "react-router";

export const Restaurants = () => {
  const restaurantIds = useSelector(selectRestaurantsIds);

  const { loggedIn } = use(AuthContext);

  return (
    <>
      <RestaurantTabs restaurantIds={restaurantIds} />

      <Outlet />

      {loggedIn && <CartContainer />}

    </>
  );
};
