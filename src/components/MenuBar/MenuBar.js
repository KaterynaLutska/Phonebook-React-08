import s from './MenuBar.module.css';
import { connect } from 'react-redux';
import { AppBar, CssBaseline, Toolbar } from '@material-ui/core';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';

const MenuBar = ({ isAuthenticated }) => {
  return (
    <header>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={s.Toolbar}>
          <Navigation />
          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(MenuBar);
