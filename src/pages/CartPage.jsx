import {CartContainer} from "../components/cart/CartContainer.jsx";
import {getAllDishes} from "../services/getAllDishes.js";

const CartPage = async () => {
  const dishes = await getAllDishes();

  if (!dishes) {
    return null;
  }

  return (
    <CartContainer dishes={dishes} />
  )
};

export default CartPage;
