import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const themeSwitch = () => setIsDark(!isDark);

  const contextValue = { isDark, themeSwitch };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
