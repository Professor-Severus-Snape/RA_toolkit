import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favouritesSlice';
import filmsReducer from './filmsSlice';
import formReducer from './formSlice';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer, // { favourites: [{Title, Year, imdbID, Type, Poster}, ...] }
    films: filmsReducer, // { films: [{...}, {...}, ...], loading, error }
    form: formReducer, // { inputValue: "" }
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
