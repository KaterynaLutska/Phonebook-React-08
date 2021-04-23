import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import img from '../images/online2.png';
import MyButton from '../components/Button';

import {
  CssBaseline,
  TextField,
  Container,
  Typography,
} from '@material-ui/core';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitn');
    this.props.onLogIn(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container maxWidth="sm">
        <CssBaseline />
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          style={{ margin: '30px' }}
        >
          Please, sign in!
        </Typography>

        <form
          onSubmit={this.handleSubmit}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <TextField
            id="standard-basic"
            label="e-mail"
            className="phonebook-input"
            type="tel"
            name="email"
            value={email}
            placeholder="e-mail"
            required
            onChange={this.handleChange}
            style={{ marginRight: '20px' }}
          />
          <TextField
            id="standard-basic"
            label="password"
            className="phonebook-input"
            type="tel"
            name="password"
            value={password}
            placeholder="password"
            type="password"
            title="Please, more than seven values"
            required
            onChange={this.handleChange}
          />
          <MyButton
            title={'Submit'}
            style={{ display: 'flex', marginTop: '10px' }}
          />
        </form>
        <img alt="img" src={this.props.img} width="380px"></img>
      </Container>
    );
  }
}

const mapStateToProps = () => ({
  img: img,
});

const mapDispatchToProps = {
  onLogIn: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
