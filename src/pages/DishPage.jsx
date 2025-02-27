import {DishPageContainer} from "../components/dish/DishPageContainer.jsx";
import {Loader} from "../components/loader/Loader.jsx";
import {Suspense} from "react";

const DishPage = async ({ params }) => {
  const { dishId } = await params;

  return (
    <Suspense fallback={<Loader text="Loading dish..." />}>
      <DishPageContainer dishId={dishId} />
    </Suspense>);
};

export default DishPage;
