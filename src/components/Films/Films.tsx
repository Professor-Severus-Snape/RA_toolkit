import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IFilmShort } from '../../models/models';
import './films.css';

const Films = () => {
  const { films, loading, error } = useSelector(
    (state: RootState) => state.films
  );

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}

      <ul>
        {films?.length ? (
          films.map((film: IFilmShort, index: number) => (
            <li key={index}>{film.Title}</li>
          ))
        ) : (
          <li>Здесь будут найденные фильмы...</li>
        )}
      </ul>
    </>
  );
};

export default Films;
