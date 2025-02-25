"use client";
import { use } from "react";
import { ThemeContext } from "../themeContext/ThemeContext.js";
import { IconTheme } from "../icons/IconTheme.jsx";
import styles from "./ToggleThemeButton.module.scss";
import classNames from "classnames";

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <button
      className={classNames(styles.toggleThemeButton, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      onClick={toggleTheme}
      type={"button"}
    >
      <IconTheme />
    </button>
  );
};
