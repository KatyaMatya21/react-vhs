import styles from "./restaurantTabs.module.less";
import { RestaurantTabsButtonContainer } from "../restaurantTabsButton/RestaurantTabsButtonContainer.jsx";

export const RestaurantTabs = ({ activeRestaurantId, onRestaurantChange, restaurantIds }) => {
  return (
    <div className={styles.tabs}>
      {restaurantIds.map((id) => (
        <RestaurantTabsButtonContainer
          key={id}
          active={activeRestaurantId===id}
          onRestaurantChange={onRestaurantChange}
          id={id}
        />
      ))}
    </div>
  );
};
