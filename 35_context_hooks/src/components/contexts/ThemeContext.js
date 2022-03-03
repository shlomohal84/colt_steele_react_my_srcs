import { createContext } from "react";
import useToggleState from "../hooks/useToggleState";
export const ThemeContext = createContext();

function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
