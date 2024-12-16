import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

export const AuthNav = () => {
  return (
    <div className={s.nav}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
