import { RestaurantTabsButton } from "../restaurantTabsButton/RestaurantTabsButton.jsx";
import styles from "./restaurantTabs.module.less";

export const RestaurantTabs = ({ activeRestaurantId, onRestaurantChange, restaurants }) => {
  return (
    <div className={styles.tabs}>
      {restaurants.map((restaurant) => (
        <RestaurantTabsButton key={restaurant.id} active={activeRestaurantId===restaurant.id} onRestaurantChange={onRestaurantChange} restaurant={restaurant} />
      ))}
    </div>
  );
};
