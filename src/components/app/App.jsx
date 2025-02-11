import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ThemeContextProvider } from "../themeContext/ThemeContextProvider.jsx";
import { AuthContextProvider } from "../authContext/AuthContextProvider.jsx";
import { Layout } from "../layout/Layout.jsx";
import { Restaurants } from "../restaurants/Restaurants.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "../../pages/HomePage.jsx";
import { RestaurantPage } from "../../pages/RestaurantPage.jsx";
import { MenuPage } from "../../pages/MenuPage.jsx";
import { ReviewsPage } from "../../pages/ReviewsPage.jsx";
import { DishPage } from "../../pages/DishPage.jsx";
import { ErrorPage } from "../../pages/ErrorPage.jsx";

export const App = () => {
  return (
    <BrowserRouter>

      <Provider store={store}>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Routes>
              <Route element={<Layout />}>

                <Route index element={<HomePage />} />

                <Route path='/restaurants' element={<Restaurants />}>
                  <Route index element={<div>Choose restaurant</div>} />
                  <Route path=':restaurantId' element={<RestaurantPage />} >
                    <Route index element={<MenuPage isIndex={true} />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                  </Route>
                </Route>

                <Route path='/dish' element={<DishPage />}>
                  <Route path=':dishId' element={<DishPage />} />
                </Route>

                <Route path='/about' element={<div>About</div>}/>
                <Route path='/contacts' element={<div>Contacts</div>}/>
                <Route path='/*' element={<ErrorPage />} />

              </Route>
            </Routes>
          </AuthContextProvider>
        </ThemeContextProvider>
      </Provider>

    </BrowserRouter>
  );
};
