import {getDishById} from "../../services/getDishById.js";
import {DishContainer} from "./DishContainer.jsx";

export const DishPageContainer = async ({ dishId }) => {
  const dish = await getDishById(dishId);

  if (!dish) {
    return null;
  }

  return (
    <DishContainer dish={dish} />
  );
};
