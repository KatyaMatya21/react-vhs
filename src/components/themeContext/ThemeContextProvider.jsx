import { useCallback, useState } from "react";
import { ThemeContext } from "./ThemeContext.js";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  }, []);

  return <ThemeContext value={{theme, toggleTheme}}>{children}</ThemeContext>;
};
