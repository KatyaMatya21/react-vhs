import { use } from "react";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs.jsx";
import { CartContainer } from "../cart/CartContainer.jsx";
import { AuthContext } from "../authContext/AuthContext.js";
import { Outlet } from "react-router";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";
import { Loader } from "../loader/Loader.jsx";
import { useGetRestaurantsQuery } from "../../redux/services/api/api.js";

export const Restaurants = () => {
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
  const { loggedIn } = use(AuthContext);

  return (
    <>
      <RestaurantTabs restaurantIds={restaurantIds} />
      <Outlet />
      {loggedIn.isLogged && <CartContainer />}
    </>
  );
};
