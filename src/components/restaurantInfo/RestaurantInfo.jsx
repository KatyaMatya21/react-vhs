import styles from "./RestaurantInfo.module.less";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { Outlet } from "react-router";
import { RestaurantNav } from "../restaurantNav/RestaurantNav.jsx";

export const RestaurantInfo = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  const { name } = restaurant || {};

  if (!name) {
    return null;
  }

  return (
    <>
      <h2 className={styles.title}>{name}</h2>
      <RestaurantNav restaurantId={restaurantId} />
      <Outlet />
    </>
  );
};
