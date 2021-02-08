import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;
  return (
    <nav style={{ backgroundColor: theme.ui }}>
      <h1 style={{ color: theme.syntax }}>Context App</h1>
      <div style={{ color: theme.syntax }} onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged out"}
      </div>
      <ul style={{ color: theme.syntax }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
