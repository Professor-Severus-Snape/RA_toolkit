import { Outlet } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './layout.css';

const Layout = () => {
  return (
    <>
      <Menu />
      <div className="page">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
