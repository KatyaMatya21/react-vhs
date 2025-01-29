import { useState, useCallback, useEffect } from "react";

export const UseProgressBar = () => {
  const [value, setValue] = useState(0);

  const effect = useCallback(
    () => {
      console.log('add');
      window.addEventListener("scroll", callback);
      return () => {
        console.log('remove');
        window.removeEventListener("scroll", callback);
      };
    },
    []
  );

  const callback = () => {
    const totalScroll = document.body.scrollHeight - window.innerHeight;
    const y = window.scrollY;
    const result = y / totalScroll > 1 ? 1 : y / totalScroll;
    setValue(result * 100);
    console.log('scroll');
  };

  useEffect( effect, [effect]);

  return {
    value
  };
};
