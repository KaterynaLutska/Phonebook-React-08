import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { connect } from 'react-redux';

import { Typography, CssBaseline } from '@material-ui/core';
import { Home } from '@material-ui/icons';

const Navigation = ({ isAuthenticated }) => {
  return (
    <div className={s.Navigation}>
      <CssBaseline />
      <NavLink className={s.NavigationItem} exact to="/">
        <Home fontSize="large" style={{ color: 'white' }} />
      </NavLink>
      {isAuthenticated && (
        <Typography variant="h6">
          <NavLink className={s.NavigationItem} exact to="/contacts">
            Phonebook
          </NavLink>
        </Typography>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
