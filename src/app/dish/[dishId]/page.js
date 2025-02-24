"use client";
import {DishPageContainer} from "../../../components/dish/DishPageContainer.jsx";
import {useParams} from "next/navigation";

const DishPage = () => {
  const { dishId } = useParams();

  return <DishPageContainer dishId={dishId} />;
};

export default DishPage;
