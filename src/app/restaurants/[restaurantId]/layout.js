import {RestaurantInfo} from "../../../components/restaurantInfo/RestaurantInfo.jsx";

const RestaurantLayout = async ({ params, children }) => {
  const { restaurantId } = await params;

  return (
    <RestaurantInfo restaurantId={restaurantId}>
      {children}
    </RestaurantInfo>
  );
};

export default RestaurantLayout;
