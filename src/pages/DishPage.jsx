import { useParams } from "react-router";
import { DishContainer } from "../components/dish/DishContainer.jsx";

export const DishPage = () => {
  const { dishId } = useParams();

  return <DishContainer dishId={dishId} />;
};
