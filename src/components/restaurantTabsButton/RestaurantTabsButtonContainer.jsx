"use client";
import {RestaurantTabsButton} from "./RestaurantTabsButton.jsx";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const RestaurantTabsButtonContainer = ({ item }) => {
  const pathname = usePathname();

  const { name, id } = item || {};

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
