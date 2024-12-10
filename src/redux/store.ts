import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './filmsSlice';

const store = configureStore({
  reducer: {
    films: filmsReducer, // [{Title: "", Year: "", imdbID: "", Type: "", Poster: ""}, ...]
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
