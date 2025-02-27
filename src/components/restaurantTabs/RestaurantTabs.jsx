import styles from "./RestaurantTabs.module.scss";
import {RestaurantTabsButtonContainer} from "../restaurantTabsButton/RestaurantTabsButtonContainer.jsx";

export const RestaurantTabs = ({ restaurants }) => {
  return (
    <div className={styles.tabs}>
      {restaurants.map((item) => (
        <RestaurantTabsButtonContainer
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};
