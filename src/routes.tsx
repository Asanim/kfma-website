import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Admin from './pages/Admin';
import Other from './pages/Other';

// Create router with the RootLayout as the main wrapper
const createRouter = (darkMode: boolean, toggleDarkMode: () => void) => {
  return createBrowserRouter([
    {
      path: '/',
      element: <RootLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'pricing',
          element: <Pricing />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'gallery',
          element: <Gallery />
        },
        {
          path: 'admin',
          element: <Admin />
        },
        {
          path: 'other',
          element: <Other />
        }
      ]
    }
  ]);
};

export default createRouter;
