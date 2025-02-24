"use client";
import {RestaurantTabsButton} from "./RestaurantTabsButton.jsx";
import Link from "next/link";
import {useGetRestaurantsQuery} from "../../redux/services/api/api.js";
import {useParams} from "next/navigation";

export const RestaurantTabsButtonContainer = ({ id }) => {
  const pathname = useParams();

  const { restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      restaurant: data?.find((restaurant) => restaurant.id === id),
    }),
  })

  const { name } = restaurant || {};

  if (!name) {
    return null;
  }

  return (
    <Link
      href={`/restaurants/${id}`}
    >
      <RestaurantTabsButton active={id===pathname.restaurantId} name={name} />
    </Link>
  );
};
