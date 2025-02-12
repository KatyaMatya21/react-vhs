import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice.js";
import { Dish } from "./Dish.jsx";
import { use } from "react";
import { AuthContext } from "../authContext/AuthContext.js";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { name, price, ingredients } = dish || {};
  const { loggedIn } = use(AuthContext);

  return (
    <Dish dishId={dishId} name={name} price={price} ingredients={ingredients} showCounter={loggedIn} />
  );
};
