import defaultAvatar from '../../images/ket.png';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { Avatar, CssBaseline, Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const UserMenu = ({ avatar, onLogout }) => {
  return (
    <>
      <CssBaseline />
      <Avatar alt="user" src={avatar} />
      <Button type="button" onClick={onLogout}>
        <LockOpenIcon fontSize="large" style={{ color: 'white' }} />
      </Button>
    </>
  );
};

const mapStateToProps = () => ({
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
