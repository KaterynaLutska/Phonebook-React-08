import { connect } from 'react-redux';
import img from '../images/ket.png';
import { authSelectors } from '../redux/auth';
import { CssBaseline, Typography, Container } from '@material-ui/core';

const HomeView = ({ isAuthenticated, name }) => {
  return (
    <Container maxWidth="sm">
      <CssBaseline />
      {!isAuthenticated ? (
        <>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            style={{ marginTop: '60px' }}
          >
            It is your best Phonebook ever!
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph
          >
            Hi there!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            My name is Kate and this is my first application! Here you can find
            a lot of useful things!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            But first register!
          </Typography>
          <img src={img} width="180px" />
        </>
      ) : (
        <>
          <Typography
            variant="h2"
            align="center"
            color="textSecondary"
            paragraph
            style={{
              marginTop: '60px',
            }}
          >
            Welcome, {name}!
          </Typography>
          <Typography variant="h4" align="center" color="textSecondary">
            I will help you!
          </Typography>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  avatar: img,
  isAuthenticated: authSelectors.getIsAuthenticated(state),
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps)(HomeView);
