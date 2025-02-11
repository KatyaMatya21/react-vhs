import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice.js";
import { Dish } from "./Dish.jsx";
import { use } from "react";
import { AuthContext } from "../authContext/AuthContext.js";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { name, price, ingredients } = dish || {};
  const { loggedIn } = use(AuthContext);

  return (
    <Dish id={id} name={name} price={price} ingredients={ingredients} showCounter={loggedIn} />
  );
};
