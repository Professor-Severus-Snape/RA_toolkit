import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { addToFavourites, removeFromFavourites } from '../../redux/favouritesSlice';
import { IFilmFull, IFilmShort } from '../../models/models';
import starAdded from '../../assets/starAdded.svg';
import starNotAdded from '../../assets/starNotAdded.svg';
import './filmFullDescription.css';

const FilmFullDescription = () => {
  // data: { Poster, Title, Year, Genre, Runtime, Director, Actors, imdbRating }
  const [data, setData] = useState<IFilmFull | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = useParams(); // достаем значение imdbID по названию динамического параметра

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const apikey = `apikey=${import.meta.env.VITE_API_KEY}`;
      const queryParam = `i=${id}`;
    
      try {
        setLoading(true);
        const response = await fetch(baseUrl + '?' + apikey + '&' + queryParam); // получаем данные

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setData(json); // сохранение полученных данных в локальный стейт
        setError(null); // нет ошибки
      } catch (err) {
        if (err instanceof Error) {
          setError(err); // возникла ошибка
        }
      } finally {
        setLoading(false); // загрузка данных завершена
      }
    };

    fetchData();
  }, [id]);

  const { films } = useSelector((state: RootState) => state.films); // найденные фильмы
  const { favourites } = useSelector((state: RootState) => state.favourites); // избранные фильмы
  const dispatch = useDispatch();

  // поиск индекса фильма в избранном для формирования изначального вида звезды:
  let filmIndex = favourites.findIndex((film: IFilmShort) => film.imdbID === id);
  let star = filmIndex !== -1 ? starAdded : starNotAdded;

  const handleStarClick = () => {
    filmIndex = favourites.findIndex((film: IFilmShort) => film.imdbID === id);

    if (filmIndex === -1) {
      const filmToAdd = films.find((film) => film.imdbID === id);
      dispatch(addToFavourites(filmToAdd)); // добавляем фильм в избранное (в store)
      star = starAdded; // смена внешнего вида звезды
    } else {
      dispatch(removeFromFavourites(id)); // удаляем фильм из избранного по id (из store)
      star = starNotAdded; // смена внешнего вида звезды
    }
  };

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {error && <h4>Ошибка получения данных...</h4>}

      {data && (
        <article className="film-description">
          <img className="film-description__poster" src={data.Poster} />
          <div className="film-description__info">
            <h2 className="film-description__title">{data.Title}</h2>
            <span className="film-description__year">Год выпуска: {data.Year}</span>
            <span className="film-description__genre">Жанр: {data.Genre}</span>
            <span className="film-description__runtime">Продолжительность: {data.Runtime}</span>
            <span className="film-description__director">Режиссер: {data.Director}</span>
            <span className="film-description__actors">В ролях: {data.Actors}</span>
            <span className="film-description__rating">Рейтинг: {data.imdbRating}</span>
          </div>
          <img
            className="film-description__star"
            src={star}
            alt="избранное"
            title="добавить в избранное"
            onClick={handleStarClick}
          />
        </article>
      )}
    </>
  );
};

export default FilmFullDescription;
