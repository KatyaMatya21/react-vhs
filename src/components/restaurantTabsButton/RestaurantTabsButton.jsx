import './RestaurantTabsButton.css';

export const RestaurantTabsButton = ({ active, onRestaurantChange, restaurant }) => {
  const { id, name } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <button className={active ? "button button--active" : "button"} type={"button"} onClick={() => onRestaurantChange(id)}>{name}</button>
  );
};
