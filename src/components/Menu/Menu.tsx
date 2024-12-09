import { NavLink } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'menu__link menu__link-active' : 'menu__link';

  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink className={linkClass} to="/" end>Главная</NavLink>
        </li>
        <li className="menu__item">
          <NavLink className={linkClass} to="favourites">Избранное</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
