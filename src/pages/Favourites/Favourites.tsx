import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Film from '../../components/Film/Film';
import { IFilmShort } from '../../models/models';
import './favourites.css';

const Favourites = () => {
  const { favourites } = useSelector((state: RootState) => state.favourites);

  return (
    <>
      <ul className="films">
        {favourites?.length ? (
          favourites.map((film: IFilmShort) => <Film key={film.imdbID} film={film} />)
        ) : (
          <li>Здесь будут фильмы, добавленные в избранное...</li>
        )}
      </ul>
    </>
  );
};

export default Favourites;
