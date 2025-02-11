import { DishCounter } from "../dishCounter/DishCounter.jsx";

export const CartItem = ({ dishId, amount, dishName }) => {
  return <>
    <div>{dishName} - <b>{amount}</b></div>
    <DishCounter dishId={dishId} />
  </>
};
