import {Suspense} from "react";
import {RestaurantInfoContainer} from "./RestaurantInfoContainer.jsx";
import {Loader} from "../loader/Loader.jsx";

export const RestaurantInfoLayout = async ({ params, children }) => {
  const { restaurantId } = await params;

  return (
    <>
      <Suspense fallback={<Loader text="Loading restaurant..." />}>
        <RestaurantInfoContainer id={restaurantId}>
          {children}
        </RestaurantInfoContainer>
      </Suspense>
    </>
  );
};
