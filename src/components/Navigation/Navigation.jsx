import { NavLink } from 'react-router-dom';
import { useAuth } from '../Hooks';
import clsx from 'clsx';
import s from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={s.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contact List
        </NavLink>
      )}
    </nav>
  );
};
