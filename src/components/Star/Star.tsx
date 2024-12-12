import { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { IFilmShort } from '../../models/models';
import { addToFavourites, removeFromFavourites } from '../../redux/favouritesSlice';
import starAdded from '../../assets/starAdded.svg';
import starNotAdded from '../../assets/starNotAdded.svg';
import './star.css';

const Star = ({ imdbID }: { imdbID: string }) => {
  const { films } = useSelector((state: RootState) => state.films); // найденные фильмы
  const { favourites } = useSelector((state: RootState) => state.favourites); // избранные фильмы
  const dispatch = useDispatch();

  // поиск индекса фильма в избранном для формирования изначального вида звезды:
  let filmIndex = favourites.findIndex((film: IFilmShort) => film.imdbID === imdbID);
  let star = filmIndex !== -1 ? starAdded : starNotAdded;

  const handleStarClick = () => {
    filmIndex = favourites.findIndex((film: IFilmShort) => film.imdbID === imdbID);

    if (filmIndex === -1) {
      const filmToAdd = films.find((film) => film.imdbID === imdbID);
      dispatch(addToFavourites(filmToAdd)); // добавляем фильм в избранное (в store)
      star = starAdded; // смена внешнего вида звезды
    } else {
      dispatch(removeFromFavourites(imdbID)); // удаляем фильм из избранного по id (из store)
      star = starNotAdded; // смена внешнего вида звезды
    }
  };

  return (
    <img
      className="star"
      src={star}
      alt="избранное"
      title="добавить в избранное"
      onClick={handleStarClick}
    />
  );
};

export default Star;
