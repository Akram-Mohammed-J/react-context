import React, { createContext, Component } from "react";
export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  themeToggle = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme,
    });
  };
  render() {
    {
      /*Note:
         1. consumers are pass as props for this component: here  <Navbar />
        <BookList /> are consumers and  <ThemeContextProvider> is a provider.
        2. so we can access consumers inside this component as follows:
        3. we want to share data between the state data to the children component
        4.react context provider take the prop named as value.
        */
    }
    return (
      <ThemeContext.Provider
        value={{ ...this.state, themeToggle: this.themeToggle }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContextProvider;
