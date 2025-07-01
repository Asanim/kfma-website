import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create theme context
interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeContextProvider');
  }
  return context;
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#EA0707',
        light: '#FF6B6B',
        dark: '#c20606',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#1a1a1a',
        light: '#2d2d2d',
        dark: '#000000',
        contrastText: '#ffffff'
      },
      background: {
        default: darkMode ? '#121212' : '#fafafa',
        paper: darkMode ? '#1e1e1e' : '#ffffff'
      },
      text: {
        primary: darkMode ? '#ffffff' : '#333333',
        secondary: darkMode ? '#b0b0b0' : '#666666'
      }
    },
    typography: {
      fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      h1: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 700
      },
      h2: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 700
      },
      h3: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 600
      },
      h4: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 600
      },
      h5: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 500
      },
      h6: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 500
      },
      body1: {
        fontFamily: 'Roboto, sans-serif'
      },
      body2: {
        fontFamily: 'Roboto, sans-serif'
      },
      button: {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 500
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: 'Roboto, sans-serif',
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: darkMode
              ? '0 4px 20px rgba(0,0,0,0.3)'
              : '0 4px 20px rgba(0,0,0,0.1)'
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            fontFamily: 'Roboto, sans-serif',
            '& .MuiInputBase-input': {
              fontFamily: 'Roboto, sans-serif'
            },
            '& .MuiInputLabel-root': {
              fontFamily: 'Roboto, sans-serif'
            }
          }
        }
      }
    }
  }), [darkMode]);

  const contextValue = useMemo(() => ({
    darkMode,
    toggleDarkMode
  }), [darkMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
