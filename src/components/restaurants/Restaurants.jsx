import CartPage from "../../pages/CartPage.jsx";

export const Restaurants = ({ children }) => {
  return (
    <>
      {children}
      <CartPage />
    </>
  );
};
