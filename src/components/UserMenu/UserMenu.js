import defaultAvatar from '../../images/online2.png';
import { connect } from 'react-redux';
import s from './UserMenu.module.css';
import { authOperations, authSelectors } from '../../redux/auth';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={s.UserMenu}>
      <p>Welcome, {name} </p>

      <img src={avatar} alt="userFoto" width="120" />
      <button type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  avatar: defaultAvatar,
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
