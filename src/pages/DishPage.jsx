import { useParams } from "react-router";
import { DishPageContainer } from "../components/dish/DishPageContainer.jsx";

export const DishPage = () => {
  const { dishId } = useParams();

  return <DishPageContainer dishId={dishId} />;
};
