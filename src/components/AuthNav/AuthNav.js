import { NavLink } from 'react-router-dom';
import s from './Auth.module.css';

const AuthNav = () => {
  return (
    <div>
      <nav>
        <NavLink className={s.AuthItem} exact to="/register">
          Registration
        </NavLink>
        <NavLink className={s.AuthItem} exact to="/login">
          Login
        </NavLink>
      </nav>
    </div>
  );
};

export default AuthNav;
