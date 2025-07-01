import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider, useThemeMode } from './contexts/ThemeContext';
import createRouter from './routes';
import './App.css';
import React from "react";

const AppContent: React.FC = () => {
  const { darkMode, toggleDarkMode } = useThemeMode();
  
  // Create router with dark mode settings
  const router = React.useMemo(() => createRouter(darkMode, toggleDarkMode), [darkMode, toggleDarkMode]);

  return <RouterProvider router={router} />;
};

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
