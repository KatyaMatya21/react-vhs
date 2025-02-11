import {use, useState} from "react";
import { RestaurantTabs } from "../restaurantTabs/RestaurantTabs.jsx";
import { RestaurantInfo } from "../restaurantInfo/RestaurantInfo.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice.js";
import { CartContainer } from "../cart/cartContainer.jsx";
import { AuthContext } from "../authContext/AuthContext.js";

export const Restaurants = () => {
  const restaurantIds = useSelector(selectRestaurantsIds);
  const [restaurantActiveId, setRestaurantActiveId] = useState(
    restaurantIds?.[0]
  );

  const onRestaurantChange = (id) => {
      setRestaurantActiveId(id);
  };

  const { loggedIn } = use(AuthContext);

  return (
    <>
      <RestaurantTabs
        activeRestaurantId={restaurantActiveId}
        onRestaurantChange={onRestaurantChange}
        restaurantIds={restaurantIds}
      />
      {restaurantActiveId && <RestaurantInfo restaurantId={restaurantActiveId} />}

      {loggedIn && <CartContainer />}
    </>
  );
};
