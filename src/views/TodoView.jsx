import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import { Container, Typography, CssBaseline } from '@material-ui/core';
import cat from '../images/cat.png';

class TodoView extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <CssBaseline />
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          style={{ margin: '30px' }}
        >
          Comming soon!
        </Typography>
        <img src={cat} width="180px" />
      </Container>
    );
  }
}

const mapStateToProps = () => ({
  cat: cat,
});

export default connect(mapStateToProps)(TodoView);
