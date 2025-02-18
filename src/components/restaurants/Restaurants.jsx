import { use, useEffect } from "react";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectGetRestaurantsRequestStatus, selectRestaurantsIds } from "../../redux/entities/restaurants/slice.js";
import { CartContainer } from "../cart/CartContainer.jsx";
import { AuthContext } from "../authContext/AuthContext.js";
import { Outlet } from "react-router";
import { getRestaurants } from "../../redux/entities/restaurants/getRestaurants.js";
import { REQUEST_STATUS_IDLE, REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../../redux/constants.js";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";
import { Loader } from "../loader/Loader.jsx";

export const Restaurants = () => {
  const dispatch = useDispatch();

  const restaurantIds = useSelector(selectRestaurantsIds);
  const requestStatus = useSelector(selectGetRestaurantsRequestStatus);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (requestStatus === REQUEST_STATUS_PENDING || !restaurantIds?.length || requestStatus === REQUEST_STATUS_IDLE) {
    return <Loader text="Loading restaurants..." />;
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return <ErrorBlock text="Error with data"/>;
  }

  const { loggedIn } = use(AuthContext);

  return (
    <>
      <RestaurantTabs restaurantIds={restaurantIds} />
      <Outlet />
      {loggedIn && <CartContainer />}
    </>
  );
};
