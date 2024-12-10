import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IFilmShort } from '../../models/models';
// import starAdded from '../../assets/starAdded.svg'; {/* NOTE: понадобится позже */}
import starNotAdded from '../../assets/starNotAdded.svg';

import './films.css';

const Films = () => {
  const { films, loading, error } = useSelector(
    (state: RootState) => state.films
  );

  const Film = ({ film }: { film: IFilmShort }) => {
    return (
      <li className="film">
        <img className="film__poster" src={film.Poster} />
        <div className="film__info">
          <h2 className="film__title">
            {/* TODO: по клику на ссылку переход на другой роут с подробным описанием фильма */}
            <a href="#" className="film__link">{film.Title}</a>
          </h2>
          <span className="film__type">Жанр: {film.Type}</span>
          <span className="film__year">Год выпуска: {film.Year}</span>
        </div>
        {/* TODO: 
          1. если фильм в избранном, закрасить звёздочку
          2. по клику на звёздочку изменить её окрас и массив избранных фильмов
        */}
        <img
          className="film__star"
          src={starNotAdded}
          alt="избранное"
          title="добавить в избранное"
        />
      </li>
    );
  };

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}

      <ul className="films">
        {films?.length ? (
          films.map((film: IFilmShort) => (
            <Film key={film.imdbID} film={film} />
          ))
        ) : (
          <li>Здесь будут найденные фильмы...</li>
        )}
      </ul>
    </>
  );
};

export default Films;
