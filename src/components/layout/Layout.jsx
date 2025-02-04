import { Header } from "../header/Header.jsx";
import { Footer } from "../footer/Footer.jsx";
import { ProgressBar } from "../progressBar/ProgressBar.jsx";

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
};
