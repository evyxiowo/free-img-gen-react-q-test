import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
  if (typeof window !== "undefined") {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedDarkMode = localStorage.getItem('darkTheme');
    
    // If no preference is stored, use the system preference
    if (storedDarkMode === null) {
      return prefersDarkMode;
    }

    // Convert the stored value to a boolean
    return storedDarkMode === 'true';
  }

  // Default to light mode for SSR or if window is undefined
  return false;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('office'); // Neutral search term

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    // Add or remove dark theme class on the body
    document.body.classList.toggle('dark-theme', newDarkTheme);

    // Store the user's preference in localStorage
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  useEffect(() => {
    // Add or remove dark theme class on the body when the theme changes
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
