import styles from "./RestaurantNav.module.scss";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const RestaurantNav = ({ restaurantId }) => {
  const pathname = usePathname();

  return (
    <div className={styles.nav}>
      <Link
        href={`/restaurants/${restaurantId}/menu`}
        className={pathname.indexOf('reviews') === -1 ? styles.active : ""}
      >
        Menu
      </Link>
      <Link
        href={`/restaurants/${restaurantId}/reviews`}
        className={pathname.indexOf('reviews') !== -1 ? styles.active : ""}
      >
        Reviews
      </Link>
    </div>
  );
};
