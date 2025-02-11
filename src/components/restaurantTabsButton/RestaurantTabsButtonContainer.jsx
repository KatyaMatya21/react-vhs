import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { RestaurantTabsButton } from "./RestaurantTabsButton.jsx";

export const RestaurantTabsButtonContainer = ({ active, onRestaurantChange, id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name } = restaurant || {};

  if (!name) {
    return null;
  }

  return (
    <RestaurantTabsButton active={active} onButtonClick={onRestaurantChange} id={id} name={name} />
  );
};
