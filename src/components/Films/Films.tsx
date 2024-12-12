import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Film from '../Film/Film';
import { IFilmShort } from '../../models/models';
import './films.css';

const Films = () => {
  const { films, loading, error } = useSelector((state: RootState) => state.films);

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}

      {!loading && !error && (
        <ul className="films">
          {films?.length ? (
            films.map((film: IFilmShort) => <Film key={film.imdbID} film={film} />)
          ) : (
            <li>Здесь будут найденные фильмы...</li>
          )}
        </ul>
      )}
    </>
  );
};

export default Films;
