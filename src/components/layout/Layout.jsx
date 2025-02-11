import { Header } from "../header/Header.jsx";
import { Footer } from "../footer/Footer.jsx";
import { ProgressBar } from "../progressBar/ProgressBar.jsx";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <ProgressBar />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
