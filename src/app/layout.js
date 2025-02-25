import {ThemeContextProvider} from "../components/themeContext/ThemeContextProvider.jsx";
import {AuthContextProvider} from "../components/authContext/AuthContextProvider.jsx";
import {ReduxProvider} from "../redux/provider.js";
import {Layout} from "../components/layout/Layout.jsx";
import '../styles/global.scss';

export const metadata = {
  title: "Restaurants",
  description: "next js app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
    <head>
      <link rel='icon' type='image/svg+xml' href='/favicon.svg'/>
    </head>
    <body>
    <div id='root'>
        <ReduxProvider>
          <ThemeContextProvider>
            <AuthContextProvider>
              <Layout>
                {children}
              </Layout>
            </AuthContextProvider>
          </ThemeContextProvider>
        </ReduxProvider>
      </div>
      </body>
    </html>
  );
};

export default RootLayout;
