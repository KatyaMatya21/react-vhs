import {Restaurants} from "./Restaurants.jsx";
import {RestaurantTabsContainer} from "../restaurantTabs/RestaurantTabsContainer.jsx";
import {Suspense} from "react";
import {Loader} from "../loader/Loader.jsx";

export const RestaurantsLayout = ({ children }) => {
  return (
    <Restaurants>
      <Suspense fallback={<Loader text="Loading restaursnts..." />}>
        <RestaurantTabsContainer />
      </Suspense>
      {children}
    </Restaurants>
  );
};
