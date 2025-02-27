import {Suspense} from "react";
import {MenuContainer} from "../components/menu/MenuContainer.jsx";
import {Loader} from "../components/loader/Loader.jsx";

export const RestaurantDishesPage = async ({ params }) => {
  const { restaurantId } = await params;

  return (
    <Suspense fallback={<Loader text="Loading dishes..." />}>
      <MenuContainer restaurantId={restaurantId} />
    </Suspense>
  );
};
