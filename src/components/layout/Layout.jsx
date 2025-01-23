import { Header } from "../header/Header.jsx";
import { Footer } from "../footer/Footer.jsx";

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};
