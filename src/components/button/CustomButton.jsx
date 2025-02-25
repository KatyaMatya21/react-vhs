"use client";
import { use } from "react";
import classNames from "classnames";
import { ThemeContext } from "../themeContext/ThemeContext.js";
import styles from "./Button.module.scss";

export const CustomButton = ({ children, type, onClick, size, disabled }) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      className={classNames(styles.button, {
        [styles.dark]: theme === "dark",
        [styles.square]: size === "square",
      })}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
