import styles from "./RestaurantNav.module.less";
import { NavLink } from "react-router";
import classNames from "classnames";

export const RestaurantNav = ({ restaurantId }) => {
  return (
    <div className={styles.nav}>
      <NavLink
        to={`/restaurants/${restaurantId}/menu`}
        className={({ isActive }) => (classNames({[styles.active]: isActive}))}
      >
        Menu
      </NavLink>
      <NavLink
        to={`/restaurants/${restaurantId}/reviews`}
        className={({ isActive}) => (classNames({[styles.active]: isActive}))}
      >
        Reviews
      </NavLink>
    </div>
  );
};
