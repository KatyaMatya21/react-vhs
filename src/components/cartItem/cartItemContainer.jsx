import { useSelector } from "react-redux";
import { selectAmountByItemId } from "../../redux/entities/cart/slice.js";
import { selectDishById } from "../../redux/entities/dishes/slice.js";
import { CartItem } from "./cartItem.jsx";

export const CartItemContainer = ({ id }) => {
  const amount = useSelector((state) => selectAmountByItemId(state, id));
  const dish = useSelector((state) => selectDishById(state, id));

   if (!dish) {
    return null;
  }

   return <CartItem dishId={id} amount={amount} dishName={dish.name}/>;
};
