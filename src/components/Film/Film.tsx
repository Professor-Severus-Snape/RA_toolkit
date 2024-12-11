import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../redux/favouritesSlice';
import { IFilmShort } from '../../models/models';
import starAdded from '../../assets/starAdded.svg';
import starNotAdded from '../../assets/starNotAdded.svg';
import { RootState } from '../../redux/store';

const Film = ({ film }: {film: IFilmShort}) => {
  const { imdbID, Poster, Title, Type, Year } = film; // данные текущего фильма

  const { favourites } = useSelector((state: RootState) => state.favourites); // избранные фильмы
  const dispatch = useDispatch();

  // поиск индекса фильма в избранном для формирования изначального вида звезды:
  let filmIndex = favourites.findIndex((film: IFilmShort) => film.imdbID === imdbID);
  let star = filmIndex !== -1 ? starAdded : starNotAdded;

  const handleStarClick = () => {
    filmIndex = favourites.findIndex((film: IFilmShort) => film.imdbID === imdbID);

    if (filmIndex === -1) {
      dispatch(addToFavourites(film)); // добавляем фильм в избранное (в store)
      star = starAdded; // смена внешнего вида звезды
    } else {
      dispatch(removeFromFavourites(imdbID)); // удаляем фильм из избранного по id (из store)
      star = starNotAdded; // смена внешнего вида звезды
    }
  };

  return (
    <li className="film">
      <img className="film__poster" src={Poster} />
      <div className="film__info">
        <h2 className="film__title">
          {/* TODO: по клику на ссылку переход на другой роут с подробным описанием фильма */}
          <a href="#" className="film__link">{Title}</a>
        </h2>
        <span className="film__type">Жанр: {Type}</span>
        <span className="film__year">Год выпуска: {Year}</span>
      </div>
      <img
        className="film__star"
        src={star}
        alt="избранное"
        title="добавить в избранное"
        onClick={handleStarClick}
      />
    </li>
  );
};

export default Film;
