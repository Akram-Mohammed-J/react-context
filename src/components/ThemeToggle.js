import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { themeToggle } = this.context;
    return (
      <div>
        <button onClick={themeToggle}>ToggleTheme</button>
      </div>
    );
  }
}

export default ThemeToggle;
