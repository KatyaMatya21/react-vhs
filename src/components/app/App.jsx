import { restaurants } from "../../mock.js";
import { Layout } from "../layout/Layout.jsx";
import { Restaurants } from "../restaurants/Restaurants.jsx";

export const App = () => {
  return (
      <Layout>
        {restaurants.length ? <Restaurants restaurants={restaurants}/> : <p>No restaurants found.</p>}
      </Layout>
  );
};
