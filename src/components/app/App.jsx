import { restaurants } from "../../mock.js";
import { Layout } from "../layout/Layout.jsx";
import { Restaurants } from "../restaurants/Restaurants.jsx";
import { ThemeContextProvider } from "../themeContext/ThemeContextProvider.jsx";
import { AuthContextProvider } from "../authContext/AuthContextProvider.jsx";

export const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Layout>
          {restaurants.length ? <Restaurants restaurants={restaurants}/> : <p>No restaurants found.</p>}
        </Layout>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};
