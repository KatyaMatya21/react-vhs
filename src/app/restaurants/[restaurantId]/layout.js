"use client";
import {RestaurantInfo} from "../../../components/restaurantInfo/RestaurantInfo.jsx";
import {useParams} from "next/navigation";

const RestaurantLayout = ({ children }) => {
  const { restaurantId } = useParams();
  return (
    <RestaurantInfo restaurantId={restaurantId}>
      {children}
    </RestaurantInfo>
  );
};

export default RestaurantLayout;
