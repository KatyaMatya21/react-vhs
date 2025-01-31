import { useState, useEffect } from "react";

const getCurrentScroll = () => {
  const totalScroll = document.body.scrollHeight - window.innerHeight;
  const y = window.scrollY;
  return y / totalScroll > 1 ? 1 : y / totalScroll;
}

export const useProgressBar = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const callback = () => {
      setValue(getCurrentScroll() * 100);
    };

    window.addEventListener("scroll", callback);

    return () => {
      window.removeEventListener("scroll", callback);
    };
  }, []);

  return value;
};
