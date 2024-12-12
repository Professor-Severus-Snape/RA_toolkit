import { Link } from 'react-router-dom';
import { IFilmShort } from '../../models/models';
import Star from '../Star/Star';
import './film.css';

const Film = ({ film }: {film: IFilmShort}) => {
  const { imdbID, Poster, Title, Type, Year } = film; // данные текущего фильма

  return (
    <li className="film">
      <img className="film__poster" src={Poster} />
      <div className="film__info">
        <h2 className="film__title">
          {/* Навигация из корня проекта: */}
          <Link className="film__link" to={`/${film.imdbID}`}>{Title}</Link>
        </h2>
        <span className="film__type">Жанр: {Type}</span>
        <span className="film__year">Год выпуска: {Year}</span>
      </div>
      
      <Star imdbID={imdbID} />
    </li>
  );
};

export default Film;
