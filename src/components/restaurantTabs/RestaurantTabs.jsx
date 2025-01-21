import { RestaurantTabsButton } from "../restaurantTabsButton/RestaurantTabsButton.jsx";

export const RestaurantTabs = ({ activeRestaurantId, onRestaurantChange, restaurants }) => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", padding:"20px"}}>
      {restaurants.map((restaurant) => (
        <RestaurantTabsButton key={restaurant.id} active={activeRestaurantId===restaurant.id} onRestaurantChange={onRestaurantChange} restaurant={restaurant} />
      ))}
    </div>
  );
};
