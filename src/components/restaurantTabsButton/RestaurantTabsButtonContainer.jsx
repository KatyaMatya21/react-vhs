"use client";
import {RestaurantTabsButton} from "./RestaurantTabsButton.jsx";
import Link from "next/link";
import {useGetRestaurantsQuery} from "../../redux/services/api/api.js";
import {usePathname} from "next/navigation";

export const RestaurantTabsButtonContainer = ({ id }) => {
  const pathname = usePathname();

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
      <RestaurantTabsButton active={!(pathname.indexOf(id) === -1)} name={name} />
    </Link>
  );
};
