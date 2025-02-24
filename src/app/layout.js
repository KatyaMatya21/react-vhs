"use client";

import {store} from "../redux/store.js";
import {ThemeContextProvider} from "../components/themeContext/ThemeContextProvider.jsx";
import {AuthContextProvider} from "../components/authContext/AuthContextProvider.jsx";
import {ProgressBar} from "../components/progressBar/ProgressBar.jsx";
import {Header} from "../components/header/Header.jsx";
import {Footer} from "../components/footer/Footer.jsx";
import {Provider} from "react-redux";
import '../styles/global.scss';

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
    <head>
      <link rel='icon' type='image/svg+xml' href='/favicon.svg'/>
      <title>Restaurants</title>
    </head>
    <body>
    <div id='root'>
        <Provider store={store}>
          <ThemeContextProvider>
            <AuthContextProvider>
              <ProgressBar />
              <Header />
              <main className="main">
                {children}
              </main>
              <Footer />
            </AuthContextProvider>
          </ThemeContextProvider>
        </Provider>
      </div>
      </body>
    </html>
  );
};

export default RootLayout;
