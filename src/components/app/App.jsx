import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ThemeContextProvider } from "../themeContext/ThemeContextProvider.jsx";
import { AuthContextProvider } from "../authContext/AuthContextProvider.jsx";
import { Layout } from "../layout/Layout.jsx";
import { Restaurants } from "../restaurants/Restaurants.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Layout>
            <Restaurants />
          </Layout>
        </AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
