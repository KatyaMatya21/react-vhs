import styles from "./RestaurantNav.module.less";
import { NavLink, useLocation } from "react-router";

export const RestaurantNav = ({ restaurantId }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={styles.nav}>
      <NavLink
        className={({isActive}) =>
          (isActive || pathname.indexOf('reviews') === -1) ? styles.active : ""
        }
        to={`/restaurants/${restaurantId}/menu`}
      >
        Menu
      </NavLink>
      <NavLink
        to={`/restaurants/${restaurantId}/reviews`}
        className={({isActive}) =>
          isActive ? styles.active : ""
        }
      >
        Reviews
      </NavLink>
    </div>
  );
};
