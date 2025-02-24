"use client";
import { use } from "react";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs.jsx";
import { CartContainer } from "../cart/CartContainer.jsx";
import { UserAuthContext } from "../authContext/UserAuthContext.js";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";
import { Loader } from "../loader/Loader.jsx";
import { useGetRestaurantsQuery } from "../../redux/services/api/api.js";

export const Restaurants = ({ children }) => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Loader text="Loading restaurants..." />;
  }

  if (isError) {
    return <ErrorBlock text="Error with data"/>;
  }

  if (!data?.length) {
    return null;
  }

  const restaurantIds = data.map((item) => item.id);
  const { loggedIn } = use(UserAuthContext);

  return (
    <>
      <RestaurantTabs restaurantIds={restaurantIds} />
      {children}
      {loggedIn.isLogged && <CartContainer />}
    </>
  );
};
