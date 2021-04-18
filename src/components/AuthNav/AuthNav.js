import { NavLink } from 'react-router-dom';
import s from './Auth.module.css';

import { Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

const AuthNav = () => {
  return (
    <div>
      <nav className={s.AuthNav}>
        <Typography variant="h6">
          <NavLink
            className={s.AuthItem}
            exact
            to="/register"
            style={{ color: 'white' }}
          >
            Registration
          </NavLink>
        </Typography>
        <Typography variant="h6">
          <NavLink
            className={s.AuthItem}
            exact
            to="/login"
            style={{ color: 'white' }}
          >
            <LockIcon fontSize="large" style={{ color: 'white' }} />
          </NavLink>
        </Typography>
      </nav>
    </div>
  );
};

export default AuthNav;
