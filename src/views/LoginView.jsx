import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

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
      <div>
        <h2>Plese, sign in</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="phonebook-input"
            type="tel"
            name="email"
            value={email}
            placeholder="e-mail"
            required
            onChange={this.handleChange}
          />

          <input
            className="phonebook-input"
            type="tel"
            name="password"
            value={password}
            placeholder="password"
            //password
            title="Please, more than seven values"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  onLogIn: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
