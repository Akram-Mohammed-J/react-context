import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { themeToggle } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={themeToggle}>ToggleTheme</button>
    </div>
  );
};

export default ThemeToggle;
