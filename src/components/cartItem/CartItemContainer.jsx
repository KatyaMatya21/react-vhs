'use client';
import {CartItem} from "./CartItem.jsx";

export const CartItemContainer = ({ id, dishes }) => {
  const dish = dishes?.find(dish => dish.id === id);

  if (!dish) {
    return null;
  }

   return (
      <CartItem dishId={id} dish={dish}/>
   );
};
