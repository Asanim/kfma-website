import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import About from './components/About';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Admin from './components/Admin';
import Other from './components/Other';

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
