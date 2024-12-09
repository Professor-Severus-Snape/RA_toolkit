import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Favourites from './pages/Favourites/Favourites';

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="favourites" element={<Favourites />} />
      </Route>
    ),
    {
      basename: import.meta.env.BASE_URL, // значение 'basename' - из конфига vite
    }
  );

  return <RouterProvider router={routes} />;
};

export default App;

// Запрос по названию фильма: http://www.omdbapi.com/?apikey=64405bd2&t=die+hard
// Запрос по IMDb ID: http://www.omdbapi.com/?apikey=64405bd2&i=tt0095016
