import { use } from "react";
import classNames from "classnames";
import { ThemeContext } from "../themeContext/ThemeContext.js";
import styles from "./Button.module.less";

export const Button = ({ children, type, onClick }) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      className={classNames(styles.button, {
        [styles.dark]: theme === "dark",
      })}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
)
  ;
};
