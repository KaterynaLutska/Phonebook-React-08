import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

class RegisterView extends Component {
  state = {
    name: '',
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
    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  reset() {}
  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Please, add Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="phonebook-input"
            type="text"
            placeholder="name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />

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

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
