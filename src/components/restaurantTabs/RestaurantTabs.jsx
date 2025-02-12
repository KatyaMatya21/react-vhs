import styles from "./RestaurantTabs.module.less";
import { RestaurantTabsButtonContainer } from "../restaurantTabsButton/RestaurantTabsButtonContainer.jsx";

export const RestaurantTabs = ({ restaurantIds }) => {
  return (
    <div className={styles.tabs}>
      {restaurantIds.map((id) => (
        <RestaurantTabsButtonContainer
          key={id}
          id={id}
        />
      ))}
    </div>
  );
};
