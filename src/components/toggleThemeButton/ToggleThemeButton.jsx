import { use } from "react";
import { ThemeContext } from "../themeContext/ThemeContext.js";
import { Button } from "../button/button";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <Button
      text={theme === "dark" ? "To light" : "To dark"}
      onClick={toggleTheme}
      type={"button"}
    />
  );
};
