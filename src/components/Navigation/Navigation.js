import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { connect } from 'react-redux';

const Navigation = ({ isAuthenticated }) => {
  return (
    <div className={s.Navigation}>
      <NavLink className={s.NavigationItem} exact to="/">
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink className={s.NavigationItem} exact to="/contacts">
          Phonebook
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Navigation);
