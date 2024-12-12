import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Favourites from './pages/Favourites/Favourites';
import FilmFullDescription from './pages/FilmFullDescription/FilmFullDescription';

import Layout from './components/Layout/Layout';

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path=":id" element={<FilmFullDescription />} />
      </Route>
    ),
    {
      basename: import.meta.env.BASE_URL, // значение 'basename' - из конфига vite
    }
  );

  return <RouterProvider router={routes} />;
};

export default App;

// API:
// Запрос всех фильмов по названию: http://www.omdbapi.com/?apikey=64405bd2&s=die+hard
// Запрос 1 конкретного фильма по названию: http://www.omdbapi.com/?apikey=64405bd2&t=die+hard
// Запрос 1 конкретного фильма по IMDb ID: http://www.omdbapi.com/?apikey=64405bd2&i=tt0095016
