import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './filmsSlice';
import favouritesReducer from './favouritesSlice';

const store = configureStore({
  reducer: {
    films: filmsReducer, // [{Title: "", Year: "", imdbID: "", Type: "", Poster: ""}, ...]
    favourites: favouritesReducer, // [{Title: "", Year: "", imdbID: "", Type: "", Poster: ""}, ...]
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
