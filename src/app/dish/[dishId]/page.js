import {DishPageContainer} from "../../../components/dish/DishPageContainer.jsx";

const DishPage = async ({ params }) => {
  const { dishId } = await params;

  return <DishPageContainer dishId={dishId} />;
};

export default DishPage;
